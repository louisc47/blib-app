import { pathOr } from 'ramda';

import contentful from '../';

export default array => {
  let res = [];
  array.map((item, i) => {
    res.push(contentful.get.entries.id(pathOr(null, ['sys', 'id'], item)));
  });
  return res;
};
