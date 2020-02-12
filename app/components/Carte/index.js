import {
  compose,
  withState,
  withHandlers,
  branch,
  renderComponent,
  lifecycle,
} from 'recompose';
import { pathOr } from 'ramda';
import { AsyncStorage } from 'react-native';

import contentful from '../../contentful';
import storage from '../../config/storage';
import NonActive from './nonActive';
import Form from './form';
import Active from './active';

export default compose(
  withState('formIsActive', 'setFormIsActive', false),
  withState('carteIsActive', 'setCarteIsActive', false),
  withState('message', 'setMessage', null),
  withState('userInfo', 'setUserInfo', null),
  withState('code', 'setCode', ''),
  withHandlers({
    init: ({ setUserInfo, setCarteIsActive }) => async () => {
      AsyncStorage.getItem(storage.userInfo).then(userInfo => {
        if (userInfo) {
          setUserInfo(userInfo.toString());
          setCarteIsActive(true);
        }
      });
    },
    toogleForm: ({ formIsActive, setFormIsActive }) => () => {
      setFormIsActive(!formIsActive);
    },
    toogleCarte: ({ carteIsActive, setCarteIsActive }) => () => {
      setCarteIsActive(!carteIsActive);
    },
    submit: ({
      code,
      setMessage,
      setUserInfo,
      setCarteIsActive,
    }) => async () => {
      let res = await contentful.get.user(code);
      if (pathOr('Error', ['sys', 'type'], res) == 'Error') {
        setMessage('Code érroné');
      } else if (res.fields && res.fields.prnom && res.fields.nom) {
        AsyncStorage.setItem(
          storage.userInfo,
          `${res.fields.prnom['en-US']} ${res.fields.nom['en-US']}`,
        );
        setUserInfo(`${res.fields.prnom} ${res.fields.nom}`);
        setCarteIsActive(true);
      }
    },
  }),
  branch(({ carteIsActive }) => carteIsActive, renderComponent(Active)),
  branch(({ formIsActive }) => formIsActive, renderComponent(Form)),
  lifecycle({
    componentDidMount() {
      this.props.init();
    },
  }),
)(NonActive);
