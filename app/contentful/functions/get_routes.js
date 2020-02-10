import { pathOr, sort } from 'ramda';

import Page from '../../container/Page';
import store from '../../redux/store';

export default () => {
  let pages = pathOr([], ['contentful', 'entries'], store.getState()).filter(
    e => pathOr(null, ['sys', 'contentType', 'sys', 'id'], e) == 'page',
  );
  pages = sort((a, b) => {
    return (
      pathOr(100, ['fields', 'order', 'en-US'], a) -
      pathOr(101, ['fields', 'order', 'en-US'], b)
    );
  }, pages);
  let res = {};
  pages.map((item, i) => {
    res[pathOr('Unknow', ['fields', 'nom', 'en-US'], item)] = {
      screen: Page,
      params: { id: pathOr(null, ['sys', 'id'], item) },
    };
  });
  return res;
};
