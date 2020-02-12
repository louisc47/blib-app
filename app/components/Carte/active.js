import { pathOr } from 'ramda';
import React from 'react';
import { View, Text } from 'react-native';

export default ({ css, userInfo }) => {
  return (
    <View style={pathOr({}, ['en-US', 'container'], css)}>
      <Text style={{ color: '#e9a618', fontSize: 42, fontWeight: 'bold' }}>
        BLIB VIP
      </Text>
      <Text
        style={{
          color: 'white',
          fontSize: 20,
          fontWeight: 'bold',
        }}
      >
        {userInfo}
      </Text>
    </View>
  );
};
