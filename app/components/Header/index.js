import { compose, withHandlers, withProps } from 'recompose';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import React from 'react';

import Component from './component';
import { toogleEnv } from '../../redux/config/actions';
import { PROD } from '../../config/env';
import colors from '../../config/colors';

const mapStateToProps = state => {
  return state.config;
};

const mapDispatchToProps = dispatch => ({
  toogleEnv: () => dispatch(toogleEnv()),
});

export default compose(
  withNavigation,
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    drawerToogle: ({ navigation }) => () => navigation.openDrawer(),
    goBack: ({ navigation }) => () => navigation.goBack(),
  }),
  withProps(({ back, drawerToogle, goBack, toogleEnv, env }) => ({
    color: env === PROD ? colors.prod.primary : colors.preprod.primary,
    LeftComponent: () => {
      if (back)
        return (
          <TouchableOpacity onPress={goBack}>
            <Icon name="chevron-left" size={40} />
          </TouchableOpacity>
        );
      return (
        <TouchableOpacity
          onPress={drawerToogle}
          onLongPress={toogleEnv}
          delayLongPress={5000}
        >
          <Icon name="menu" size={32} />
        </TouchableOpacity>
      );
    },
  })),
)(Component);
