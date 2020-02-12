import { pathOr } from 'ramda';
import { Icon } from 'react-native-elements';
import { Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import React from 'react';

export default ({ css, location, markersList, redirect }) => {
  if (!location || !markersList) return null;
  return (
    <View style={pathOr({}, ['en-US'], css)}>
      <MapView initialRegion={location} style={{ width: '100%', height: 400 }}>
        {markersList.map((item, i) => {
          console.log(item);
          return (
            <Marker
              key={i}
              coordinate={{
                latitude: pathOr(0, ['fields', 'lieu', 'en-US', 'lat'], item),
                longitude: pathOr(0, ['fields', 'lieu', 'en-US', 'lon'], item),
              }}
              title={pathOr('', ['fields', 'titre', 'en-US'], item)}
              description={pathOr('', ['fields', 'description', 'en-US'], item)}
              pinColor={pathOr(
                'black',
                ['details', 'fields', 'color', 'en-US'],
                item,
              )}
              onCalloutPress={() => redirect(item)}
            />
          );
        })}
      </MapView>
    </View>
  );
};
