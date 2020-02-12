import { getURL } from '../../config/contentful';

export default id => {
  return fetch(getURL('entries/' + id))
    .then(res => res.json())
    .then(json => json);
};
