import { pathOr } from 'ramda';

import get_entries_id from './get_entrie';

export default array => {
  let res = [];
  array.map((item, i) => {
    res.push(get_entries_id(pathOr(null, ['sys', 'id'], item)));
  });
  return res;
};
