import { pathOr } from 'ramda';
import { withNavigation } from 'react-navigation';
import { compose, withState, lifecycle, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import contentful from '../../contentful';
import Component from './component';

const mapStateToProps = state => state.contentful;

export default compose(
  withNavigation,
  connect(mapStateToProps, null),
  withState('location', 'setLocation', null),
  withState('markersList', 'setMarkersList', null),
  withHandlers({
    populateMarker: ({ markers }) => () => {
      let tab = [];

      markers = markers['en-US'];
      for (let i = 0; i < markers.length; i++) {
        let res = contentful.get.entries.id(
          pathOr(null, ['sys', 'id'], markers[i]),
        );
        let lien = pathOr(null, ['fields', 'lien', 'en-US', 'sys', 'id'], res);
        lien = { ...contentful.get.entries.id(lien), details: res };
        tab[i] = lien;
      }
      return tab;
    },
    redirect: ({ navigation }) => item => navigation.navigate('SousPage', item),
  }),
  lifecycle({
    componentDidMount() {
      const {
        setLocation,
        location,
        populateMarker,
        setMarkersList,
      } = this.props;
      console.log(this.props);
      navigator.geolocation.getCurrentPosition(position => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.1,
          longitudeDelta: 0.002,
        });
      });

      setMarkersList(populateMarker());
    },
  }),
)(Component);
