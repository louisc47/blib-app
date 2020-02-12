import { pathOr } from 'ramda';
import { ScrollView, View, Text, Image } from 'react-native';
import React from 'react';
import { Icon } from 'react-native-elements';

import contentful from '../../contentful';

export default ({ css, icon, titre, fullList, assets }) => {
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
          {titre['en-US']}
        </Text>
      </View>
      <ScrollView horizontal>
        {fullList.map((item, i) => {
          return (
            <View style={pathOr({}, ['en-US', 'liste', css])} key={i}>
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
                <Text style={pathOr({}, ['en-US', 'subtitle'], css)}>
                  {pathOr('', ['titre', 'en-US'], item).substring(0, 35)}
                </Text>
                <Text style={pathOr({}, ['en-US', 'description'], css)}>
                  {pathOr('', ['description', 'en-US'], item).substring(0, 35)}
                </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
