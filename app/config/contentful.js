import env from './env';

const space_id = 'u1zc8c5fghbm';
export const token = 'CFPAT-XQAWFy7Hi-Vu4lST3ULY7NSfM2QCuL5il9WrfaZegLI';

export const getURL = (object, filters = `access_token=${token}`) =>
  `https://api.contentful.com/spaces/${space_id}/environments/${env()}/${object}?${filters}`;
