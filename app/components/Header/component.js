import { Header } from 'react-native-elements';
import React from 'react';
import { Image } from 'react-native';

const logo = require('../../../assets/logo.png');

const Logo = () => <Image source={logo} style={{ width: 115, height: 40 }} />;

export default ({ onLeftClick, LeftComponent, color, env }) => {
  return (
    <Header
      leftComponent={() => <LeftComponent />}
      centerComponent={<Logo />}
      containerStyle={{ backgroundColor: color }}
    />
  );
};
