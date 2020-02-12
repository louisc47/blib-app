import { pathOr } from 'ramda';
import { Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Icon, Input } from 'react-native-elements';

export default props => (
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
    <Input
      placeholder="Code de la carte"
      onChange={e => props.setCode(e.nativeEvent.text)}
      errorMessage={props.message}
    />
    <TouchableOpacity
      style={pathOr({}, ['css', 'en-US', 'bouton1'], props)}
      onPress={props.submit}
    >
      <Text style={pathOr({}, ['css', 'en-US', 'bouton1Text'], props)}>
        Valider
      </Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={pathOr({}, ['css', 'en-US', 'bouton2'], props)}
      onPress={props.toogleForm}
    >
      <Text style={pathOr({}, ['css', 'en-US', 'bouton2Text'], props)}>
        Annuler
      </Text>
    </TouchableOpacity>
  </View>
);
