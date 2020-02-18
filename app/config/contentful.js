import env from './env';

export const space_id = 'u1zc8c5fghbm';
export const token = 'CFPAT-XQAWFy7Hi-Vu4lST3ULY7NSfM2QCuL5il9WrfaZegLI';

export const getURL = (
  object,
  filters = `access_token=${token}&limit=1000`,
  isPost = false,
) => {
  if (isPost)
    return `https://api.contentful.com/spaces/${space_id}/environments/${env()}/entries?access_token=${token}`;
  return `https://api.contentful.com/spaces/${space_id}/environments/${env()}/${object}?${filters}`;
};
