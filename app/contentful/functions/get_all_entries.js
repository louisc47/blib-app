import { getURL } from '../../config/contentful';
import env from '../../config/env';

export default () =>
  fetch(getURL('entries'))
    .then(res => res.json())
    .then(json => json.items);
