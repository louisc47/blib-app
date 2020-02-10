import { View } from 'react-native';
import React from 'react';

import Header from '../components/Header';

export default WrappedComponent => {
  class withHeader extends React.Component {
    render() {
      return (
        <View>
          <Header />
          <WrappedComponent />
        </View>
      );
    }
  }
  return withHeader;
};
