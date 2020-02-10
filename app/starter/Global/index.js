import { compose } from 'recompose';
import { connect } from 'react-redux';
import React from 'react';

import Init from '../Init';
import Routes from '../Routes';

const Component = () => {
  const InitializedComponent = Init(Routes);
  return <InitializedComponent />;
};

const mapStateToProps = state => state.config;

export default compose(connect(mapStateToProps))(Component);
