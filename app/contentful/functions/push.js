import { token, space_id } from '../../config/contentful';
const contentful = require('contentful-management/dist/contentful-management.browser.min.js');

export default (contentType, body) => {
  const client = contentful.createClient({
    accessToken: token,
  });
  return client
    .getSpace(space_id)
    .then(space => {
      return space.createEntry(contentType, body);
    })
    .then(entry => entry);
};
