import { compose, lifecycle, withHandlers } from 'recompose';
import { pathOr, path } from 'ramda';
import { connect } from 'react-redux';
import { Notifications } from 'expo';
import { AsyncStorage, Vibration } from 'react-native';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';

import contentful from '../../contentful';
import storage from '../../config/storage';
import * as actions from '../../redux/contentful/actions';

const _contentful = require('contentful-management/dist/contentful-management.browser.min.js');

const mapStateToProps = state => state.contentful;

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatchSetEntries: entries => {
      dispatch(actions.setEntries(entries));
    },
    dispatchSetAssets: assets => {
      dispatch(actions.setAssets(assets));
    },
  };
};

export default Component =>
  compose(
    connect(mapStateToProps, mapDispatchToProps),
    withHandlers({
      init: ({ dispatchSetEntries, dispatchSetAssets }) => async () => {
        const entries = await contentful.get.entries.all();
        console.log(entries);
        const assets = await contentful.get.assets.all();
        dispatchSetEntries(entries);
        dispatchSetAssets(pathOr([], ['items'], assets));
      },
      registerForPushNotification: () => async () => {
        const isPNAuth = (await AsyncStorage.getItem(storage.expoToken))
          ? true
          : false;
        const isMember = (await AsyncStorage.getItem(storage.userInfo))
          ? true
          : false;
        if (Constants.isDevice) {
          const { status: existingStatus } = await Permissions.getAsync(
            Permissions.NOTIFICATIONS,
          );
          let finalStatus = existingStatus;
          if (existingStatus !== 'granted') {
            const { status } = await Permissions.askAsync(
              Permissions.NOTIFICATIONS,
            );
            finalStatus = status;
          }
          if (finalStatus !== 'granted') {
            return;
          }
          let token = await Notifications.getExpoPushTokenAsync();
          if (!isPNAuth) {
            AsyncStorage.setItem(storage.expoToken, 'N/C');
            const entrie = await contentful.push('user', {
              fields: {
                id: { 'en-US': token },
                isMember: { 'en-US': isMember },
              },
            });
            AsyncStorage.setItem(
              storage.expoToken,
              pathOr('N/C', ['sys', 'id'], entrie),
            );
          } else {
            const client = _contentful.createClient({
              accessToken: 'CFPAT-XQAWFy7Hi-Vu4lST3ULY7NSfM2QCuL5il9WrfaZegLI',
            });
            const expoToken = await AsyncStorage.getItem(storage.expoToken);
            const users = await client
              .getSpace('u1zc8c5fghbm')
              .then(space => space.getEntries())
              .then(res =>
                res.items.find(e => {
                  return (
                    pathOr('', ['sys', 'contentType', 'sys', 'id'], e) ==
                      'user' && pathOr('', ['sys', 'id'], e) == expoToken
                  );
                }),
              );
            if (!users) {
              const entrie = await contentful.push('user', {
                fields: {
                  id: { 'en-US': token },
                  isMember: { 'en-US': isMember },
                },
              });
              AsyncStorage.setItem(
                storage.expoToken,
                pathOr('N/C', ['sys', 'id'], entrie),
              );
            } else if (
              pathOr(null, ['fields', 'isMember', 'en-US'], users) != isMember
            ) {
              contentful.update(pathOr(null, ['sys', 'id'], users), isMember);
            }
          }
        }
      },
      _handleNotification: () => () => {
        Vibration.vibrate([10, 200, 10, 200], false);
      },
    }),
    lifecycle({
      componentDidMount() {
        this.props.init();
        this.props.registerForPushNotification();
        this._notificationSubscription = Notifications.addListener(
          this.props._handleNotification,
        );
      },
    }),
  )(Component);
