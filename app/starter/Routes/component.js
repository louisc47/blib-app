import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import React from 'react';
import SousPage from '../../container/SousPage';

export default props => {
  const { routes } = props;
  if (!routes || Object.keys(routes).length == 0) return null;
  const navigator = createDrawerNavigator(
    {
      ...routes,
      SousPage: {
        screen: SousPage,
        navigationOptions: { drawerLabel: () => null },
      },
    },
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
