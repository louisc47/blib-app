import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import Page from '../../container/Page';
import React from 'react';
import { Text } from 'react-native';

export default ({ routes }) => {
  if (!routes || Object.keys(routes).length == 0) return null;
  const navigator = createDrawerNavigator(
    { ...routes },
    {
      drawerBackgroundColor: '#e9a618',
      contentOptions: {
        activeTintColor: 'white',
        inactiveTintColor: 'black',
        activeBackgroundColor: 'black',
        inactiveBackgroundColor: '#e9a618',
      },
    },
  );

  const Container = createAppContainer(navigator);
  return <Container />;
};
