export const TOGGLE_ENV = 'TOGGLE_ENV';
export const SET_VERSION = 'SET_VERSION';

export const toogleEnv = () => ({
  type: TOGGLE_ENV,
});

export const setVersion = version => ({
  type: SET_VERSION,
  version,
});
