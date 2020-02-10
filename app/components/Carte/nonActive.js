import { pathOr } from 'ramda';
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

export default props => {
  return (
    <View style={pathOr({}, ['css', 'en-US', 'container'], props)}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 20,
        }}
      >
        <View style={{ marginRight: 10 }}>
          <Icon
            name={pathOr('', ['icon', 'en-US'], props)}
            color={pathOr('black', ['css', 'en-US', 'icon', 'color'], props)}
            type={pathOr('', ['css', 'en-US', 'icon', 'type'], props)}
          />
        </View>
        <Text style={pathOr({}, ['css', 'en-US', 'titre'], props)}>
          {pathOr('', ['titre', 'en-US'], props)}
        </Text>
      </View>
      <TouchableOpacity style={pathOr({}, ['css', 'en-US', 'bouton1'], props)}>
        <Text style={pathOr({}, ['css', 'en-US', 'bouton1Text'], props)}>
          {pathOr('', ['textBouton1', 'en-US'], props)}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={pathOr({}, ['css', 'en-US', 'bouton2'], props)}
        onPress={props.toogleForm}
      >
        <Text style={pathOr({}, ['css', 'en-US', 'bouton2Text'], props)}>
          {pathOr('', ['textBouton2', 'en-US'], props)}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
