import { pathOr } from 'ramda';
import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

export default ({ css, icon, titre, nextEvent, redirect, assetURL }) => {
  return (
    <View style={pathOr({}, ['en-US', 'container'], css)}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 20,
        }}
      >
        <View style={{ marginRight: 10 }}>
          <Icon
            name={pathOr('', ['en-US'], icon)}
            color={pathOr('black', ['en-US', 'icon', 'color'], css)}
            type={pathOr('', ['en-US', 'icon', 'type'], css)}
          />
        </View>
        <Text style={pathOr({}, ['en-US', 'titre'], css)}>
          {pathOr('', ['en-US'], titre)}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => redirect(nextEvent)}
        style={{ width: '100%' }}
      >
        <ImageBackground
          style={{
            width: '100%',
            height: 200,
            backgroundColor: 'grey',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          imageStyle={{ resizeMode: 'cover' }}
          source={{
            uri: 'http:' + assetURL,
          }}
        >
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold',
              backgroundColor: 'black',
              width: '100%',
              textAlign: 'center',
              padding: 5,
              opacity: 0.7,
            }}
          >
            {pathOr('', ['titre', 'en-US'], nextEvent)}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};
