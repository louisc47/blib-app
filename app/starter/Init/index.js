import { compose, lifecycle, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import contentful from '../../contentful';
import * as actions from '../../redux/contentful/actions';
import { pathOr } from 'ramda';

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
        const assets = await contentful.get.assets.all();
        dispatchSetEntries(entries);
        dispatchSetAssets(pathOr([], ['items'], assets));
      },
    }),
    lifecycle({
      componentDidMount() {
        this.props.init();
      },
    }),
  )(Component);
