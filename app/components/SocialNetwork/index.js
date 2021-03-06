import { pathOr } from 'ramda';
import React from 'react';
import { Text, View, Linking, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

export default ({ css, titre, icon, instagram, facebook, web }) => {
  return (
    <View style={pathOr({}, ['en-US', 'container'], css)}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
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
      <View
        style={{
          with: '100%',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <TouchableOpacity
          style={{ marginRight: 10 }}
          onPress={() => Linking.openURL(pathOr(null, ['en-US'], instagram))}
          style={{
            backgroundColor: 'black',
            width: 65,
            height: 65,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Icon name="instagram" color="white" type="font-awesome" size={34} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginRight: 10 }}
          onPress={() => Linking.openURL(pathOr(null, ['en-US'], facebook))}
          style={{
            backgroundColor: 'black',
            width: 65,
            height: 65,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Icon name="facebook" color="white" type="font-awesome" size={34} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginRight: 10 }}
          onPress={() => Linking.openURL(pathOr(null, ['en-US'], web))}
          style={{
            backgroundColor: 'black',
            width: 65,
            height: 65,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Icon name="globe" color="white" type="feather" size={34} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
