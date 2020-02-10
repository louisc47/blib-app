import { compose, lifecycle, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import contentful from '../../contentful';
import * as actions from '../../redux/contentful/actions';

const mapStateToProps = state => state.contentful;

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatchSetEntries: entries => {
      dispatch(actions.setEntries(entries));
    },
  };
};

export default Component =>
  compose(
    connect(mapStateToProps, mapDispatchToProps),
    withHandlers({
      init: ({ dispatchSetEntries }) => async () => {
        const entries = await contentful.get.entries.all();
        dispatchSetEntries(entries);
      },
    }),
    lifecycle({
      componentDidMount() {
        this.props.init();
      },
    }),
  )(Component);
