import { compose, withProps } from 'recompose';
import { connect } from 'react-redux';
import React from 'react';

import contentful from '../../contentful';
import Component from './component';
import { Text } from 'react-native';

const mapStateToProps = state => state.contentful;

const Test = () => <Text>ROUTES</Text>;

export default compose(
  connect(mapStateToProps),
  withProps(({ entries }) => ({
    routes: contentful.get.routes(),
  })),
)(Component);
