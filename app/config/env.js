import { pathOr } from 'ramda';

import store from '../redux/store';

export const PROD = 'PROD';
export const PREPROD = 'PREPROD';

export default () => {
  const env = pathOr('PROD', ['config', 'env'], store.getState());
  if (env == PREPROD) return 'pre-prod';
  return 'master';
};
