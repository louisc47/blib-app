import { combineReducers } from 'redux';

import config from './config/reducer';
import contentful from './contentful/reducer';

export default combineReducers({
  config,
  contentful,
});
