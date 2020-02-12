import { getURL } from '../../config/contentful';

export default () => {
  return fetch(getURL('assets'))
    .then(res => res.json())
    .then(json => json);
};
