import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  Linking,
} from 'react-native';
import { Icon } from 'react-native-elements';

export default ({ app_url }) => (
  <View
    style={{
      width: '100%',
      height: Dimensions.get('screen').height,
      padding: 50,
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#e9a618',
    }}
  >
    <Image
      source={require('../../../assets/logo.png')}
      style={{ width: 200, height: 75 }}
    />
    <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 30 }}>
      Une nouvelle version de l'application est disponible
    </Text>
    <TouchableOpacity
      onPress={() => Linking.openURL(app_url)}
      style={{
        backgroundColor: 'black',
        padding: 10,
        width: '100%',
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
      }}
    >
      <Icon name="cloud-download" type="octicons" size={20} color="white" />
      <Text style={{ fontSize: 20, color: 'white' }}>
        Télécharger maintenant
      </Text>
    </TouchableOpacity>
  </View>
);
