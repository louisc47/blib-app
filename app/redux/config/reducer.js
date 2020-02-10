import { PROD, PREPROD } from '../../config/env';
import * as actions from './actions';

const initialState = {
  env: 'PROD',
  version: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.TOGGLE_ENV:
      if (state.env === PROD) return { ...state, env: PREPROD };
      return { ...state, env: PROD };
    case actions.SET_VERSION:
      return { ...state, version: action.version };
    default:
      return state;
  }
};
