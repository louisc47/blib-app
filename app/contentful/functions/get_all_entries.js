import { getURL } from '../../config/contentful';

export default () =>
  fetch(getURL('entries'))
    .then(res => res.json())
    .then(json => json.items);
