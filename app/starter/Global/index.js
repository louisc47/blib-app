import { compose, lifecycle, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { SharedElementRenderer } from 'react-native-motion';
import React from 'react';

import Init from '../Init';
import Routes from '../Routes';

const Component = () => {
  const InitializedComponent = Init(Routes);
  return (
    <SharedElementRenderer>
      <InitializedComponent />
    </SharedElementRenderer>
  );
};

const mapStateToProps = state => state.config;

export default compose(connect(mapStateToProps))(Component);
