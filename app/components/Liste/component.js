import { pathOr } from 'ramda';
import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import contentful from '../../contentful';

export default props => {
  const {
    fullList,
    redirect,
    assets,
    titre,
    icon,
    css = { 'en-US': {} },
  } = props;
  console.log('liste', props);
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
      {fullList.map((item, i) => {
        return (
          <TouchableOpacity
            style={pathOr({}, ['en-US', 'liste'], css)}
            key={i}
            onPress={() => redirect(item)}
          >
            {assets && assets.length > 0 ? (
              <Image
                source={{
                  uri:
                    'http:' +
                    contentful.get.assets.id(
                      pathOr('', ['image', 'en-US', 'sys', 'id'], item),
                    ),
                }}
                style={pathOr({}, ['en-US', 'image'], css)}
              />
            ) : null}

            <View>
              <Text style={{ fontWeight: 'bold' }}>
                {pathOr('', ['titre', 'en-US'], item).substring(0, 35)}
              </Text>
              <Text style={pathOr({}, ['en-US', 'description'], css)}>
                {pathOr('', ['description', 'en-US'], item).substring(0, 35)}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
