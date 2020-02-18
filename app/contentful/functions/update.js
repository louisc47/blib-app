import { token, space_id } from '../../config/contentful';
const contentful = require('contentful-management/dist/contentful-management.browser.min.js');

export default (entry, isMember) => {
  const client = contentful.createClient({
    accessToken: token,
  });
  client
    .getSpace(space_id)
    .then(space => {
      return space.getEntry(entry);
    })
    .then(entry => {
      entry.fields.isMember['en-US'] = isMember;
      return entry.update();
    })
    .catch(err => console.log(err));
};
