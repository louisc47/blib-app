import get_all_entries from './functions/get_all_entries';
import get_entrie from './functions/get_entrie';
import get_routes from './functions/get_routes';

import get_all_assets from './functions/get_all_assets';
import get_assets from './functions/get_assets';

import get_user from './functions/get_user';

import populate from './functions/populate';

import push from './functions/push';
import update from './functions/update';

export default {
  get: {
    entries: {
      all: get_all_entries,
      id: get_entrie,
    },
    assets: {
      all: get_all_assets,
      id: get_assets,
    },
    user: get_user,
    routes: get_routes,
  },

  push: push,
  update,

  populate,
};
