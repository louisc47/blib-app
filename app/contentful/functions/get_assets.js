import { pathEq, pathOr } from 'ramda';
import store from '../../redux/store';

export default id => {
  const assets = pathOr(null, ['contentful', 'assets'], store.getState());
  if (!assets || assets.length <= 0) return null;
  const asset = assets.find(e => pathEq(['sys', 'id'], id, e));
  return pathOr('', ['fields', 'file', 'en-US', 'url'], asset);
};
