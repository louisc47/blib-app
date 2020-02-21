import { Header } from 'react-native-elements';
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

const logo = require('../../../assets/logo.png');

const Logo = () => <Image source={logo} style={{ width: 115, height: 40 }} />;

export default ({ LeftComponent, color, navigation }) => {
  return (
    <Header
      leftComponent={() => <LeftComponent />}
      centerComponent={
        <TouchableOpacity onPress={() => navigation.navigate('Accueil')}>
          <Logo />
        </TouchableOpacity>
      }
      containerStyle={{ backgroundColor: color }}
    />
  );
};
