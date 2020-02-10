import { Provider } from 'react-redux';
import React from 'react';

import GlobalStarter from './app/starter/Global';
import store from './app/redux/store';

export default () => (
  <Provider store={store}>
    <GlobalStarter />
  </Provider>
);
