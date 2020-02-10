import { pathOr } from 'ramda';
import React from 'react';
import { View, Text } from 'react-native';

export default ({ text, nombre, css }) => {
  return (
    <View style={pathOr({}, ['en-US'], css)}>
      <Text
        style={{
          color: pathOr('black', ['en-US', 'color'], css),
          fontSize: 42,
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        {pathOr('', ['en-US'], nombre)}
      </Text>
      <Text
        style={{
          color: 'black',
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        {pathOr('', ['en-US'], text)}
      </Text>
    </View>
  );
};
