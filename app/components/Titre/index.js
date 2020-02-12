import { pathOr } from 'ramda';
import React from 'react';
import { Text } from 'react-native';

import default_style from './style';

export default ({ valeur, css = default_style }) => {
  return <Text style={pathOr({}, ['en-US'], css)}>{valeur['en-US']}</Text>;
};
