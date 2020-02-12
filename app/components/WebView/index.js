import {Dimensions} from 'react-native'
import { pathOr } from 'ramda';
import { WebView } from 'react-native-webview';
import React from 'react';

const height = Dimensions.get('window').height

export default ({ url }) => {
  return <WebView source={{ uri: pathOr(null, ['en-US'], url) }} style={{width: '100%', height: height - 65}}/>;
};
