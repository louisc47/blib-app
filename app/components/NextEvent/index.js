import { pathOr } from 'ramda';
import {
  compose,
  lifecycle,
  withProps,
  withState,
  withHandlers,
  branch,
  renderNothing,
} from 'recompose';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import Component from './component';
import contentful from '../../contentful';

const mapStateToProps = state => state.contentful;

export default compose(
  withNavigation,
  withState('assetURL', 'setAssetURL', null),
  connect(mapStateToProps),
  withProps(({ entries }) => ({
    events: entries.filter(e => e.sys.contentType.sys.id == 'evenement'),
  })),
  withProps(({ events }) => ({
    nextEvent: pathOr(
      null,
      [0, 'fields'],
      events.sort((a, b) => {
        let dateA = new Date(pathOr(0, ['fields', 'date', 'en-US'], a));
        let dateB = new Date(pathOr(0, ['fields', 'date', 'en-US'], b));
        return dateA - dateB;
      }),
    ),
  })),
  withHandlers({
    redirect: ({ navigation }) => item => {
      navigation.navigate('SousPage', { item });
    },
  }),
  lifecycle({
    componentDidMount() {
      const idAsset = pathOr(
        '',
        ['nextEvent', 'image', 'en-US', 'sys', 'id'],
        this.props,
      );
      const url = contentful.get.assets.id(idAsset);
      this.props.setAssetURL(url);
    },
  }),
)(Component);
