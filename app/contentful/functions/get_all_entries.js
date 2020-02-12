import { getURL } from '../../config/contentful';
import { pathOr } from 'ramda';

export default () =>
  fetch(getURL('entries'))
    .then(res => res.json())
    .then(json => {
      let res = json.items.filter(e => {
        let contentType = pathOr(null, ['sys', 'contentType', 'sys', 'id'], e);
        return contentType != null && contentType != 'adhrent';
      });
      return res;
    });
