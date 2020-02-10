import { compose } from 'recompose';
import { connect } from 'react-redux';
import { pathOr } from 'ramda';
import React from 'react';

export default WrappedComponent => {
  const mapStateToProps = state => ({
    env: pathOr(null, ['contentful', 'entries'], state),
  });
  return compose(connect(mapStateToProps))(WrappedComponent);
};
