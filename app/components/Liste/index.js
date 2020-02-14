import { pathOr } from 'ramda';
import { withNavigation } from 'react-navigation';
import {
  compose,
  lifecycle,
  withHandlers,
  withState,
  branch,
  renderComponent,
} from 'recompose';
import { connect } from 'react-redux';

import contentful from '../../contentful';
import Component from './component';
import Horizontal from './horizontal';

const mapStateToProps = state => state.contentful;

export default compose(
  withNavigation,
  connect(mapStateToProps),
  withState('fullList', 'setFullList', []),
  withHandlers({
    loadList: ({ liste, setFullList }) => () => {
      let fullList = [];
      for (let i = 0; i < pathOr([], ['en-US'], liste).length; i++) {
        let data = contentful.get.entries.id(
          pathOr({ fields: [] }, ['en-US', i, 'sys', 'id'], liste),
        );
        fullList.push(data.fields);
      }
      setFullList(fullList);
    },
    redirect: ({ navigation }) => item =>
      navigation.navigate('SousPage', { item }),
  }),
  lifecycle({
    componentDidMount() {
      this.props.loadList();
    },
  }),
  branch(
    ({ horisontale }) => pathOr(false, ['en-US'], horisontale),
    renderComponent(Horizontal),
  ),
)(Component);
