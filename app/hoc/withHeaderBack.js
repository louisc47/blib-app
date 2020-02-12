import { View } from 'react-native';
import React from 'react';

import Header from '../components/Header';

export default WrappedComponent => {
  class withHeader extends React.Component {
    render() {
      return (
        <View>
          <Header back />
          <WrappedComponent />
        </View>
      );
    }
  }
  return withHeader;
};
