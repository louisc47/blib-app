import { compose, withProps } from 'recompose';
import { pathOr } from 'ramda';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import React from 'react';
import contentful from '../../contentful';

import Titre from '../../components/Titre';

import withHeaderBack from '../../hoc/withHeaderBack';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';

const convertDateNumber = n => {
  if (n < 10) return '0' + n;
  return n;
};

const Component = props => {
  const { item } = props;
  let dateConvert = null;
  if (!item) {
    return null;
  }
  if (item.date) dateConvert = new Date(pathOr('', ['date', 'en-US'], item));
  return (
    <ScrollView
      contentContainerStyle={{
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#eeeeee',
        paddingBottom: 100,
      }}
    >
      {pathOr(false, ['image', 'en-US', 'sys', 'id'], item) ? (
        <Image
          source={{
            uri:
              'http:' +
              contentful.get.assets.id(
                pathOr('', ['image', 'en-US', 'sys', 'id'], item),
              ),
          }}
          style={{ width: '100%', height: 400 }}
        />
      ) : null}

      <View
        style={{
          width: '90%',
          padding: 20,
          elevation: 6,
          marginTop: 20,
          borderRadius: 15,
          marginBottom: 20,
          shadiwRadius: 4.65,
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.27,
          backgroundColor: 'white',
        }}
      >
        {item.titre ? <Titre valeur={pathOr('', ['titre'], item)} /> : null}
        {item.description ? (
          <Text style={{ marginTop: 20 }}>
            {pathOr('', ['description', 'en-US'], item)}
          </Text>
        ) : null}
        {item.nomDuLieu || item.date ? (
          <View style={{ marginTop: 20 }}>
            <Text>
              {item.nomDuLieu
                ? 'Rendez-vous ' + pathOr('', ['nomDuLieu', 'en-US'], item)
                : null}
            </Text>
            <Text>
              {item.date
                ? `Le ${convertDateNumber(
                    dateConvert.getDate(),
                  )}/${convertDateNumber(
                    dateConvert.getMonth() + 1,
                  )}/${dateConvert.getFullYear()} à ${convertDateNumber(
                    dateConvert.getHours(),
                  )}:${convertDateNumber(dateConvert.getMinutes())}`
                : null}
            </Text>
          </View>
        ) : null}
      </View>
      {item.lieu ? (
        <TouchableOpacity
          style={{
            padding: 20,
            elevation: 6,
            marginTop: 20,
            borderRadius: 150,
            marginBottom: 20,
            shadiwRadius: 4.65,
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            backgroundColor: 'black',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
          onPress={() => {
            const lat = pathOr(null, ['lieu', 'en-US', 'lat'], item);
            const lon = pathOr(null, ['lieu', 'en-US', 'lon'], item);
            const url = `geo:${lat},${lon}`;
            Linking.canOpenURL(url).then(supported => {
              if (supported) Linking.openURL(url);
              else alert('Fonctionnalité indisponible');
            });
          }}
        >
          <Icon type="font-awesome" name="car" color="white" size={26} />
        </TouchableOpacity>
      ) : null}
      {item.facebook ? (
        <TouchableOpacity
          style={{
            padding: 20,
            paddingHorizontal: 27,
            elevation: 6,
            marginTop: 20,
            borderRadius: 150,
            marginBottom: 20,
            shadiwRadius: 4.65,
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            backgroundColor: '#3b5998',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
          onPress={() =>
            Linking.openURL(pathOr(null, ['facebook', 'en-US'], item))
          }
        >
          <Icon type="font-awesome" name="facebook" color="white" size={26} />
        </TouchableOpacity>
      ) : null}
    </ScrollView>
  );
};

const mapStateToProps = state => state.contentful;

export default compose(
  withHeaderBack,
  withNavigation,
  connect(mapStateToProps, null),
  withProps(({ navigation }) => ({
    item: navigation.getParam('item'),
  })),
)(Component);
