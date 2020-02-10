import get_all_entries from './functions/get_all_entries';
import get_entrie from './functions/get_entrie';
import get_routes from './functions/get_routes';

import populate from './functions/populate';

export default {
  get: {
    entries: {
      all: get_all_entries,
      id: get_entrie,
    },
    routes: get_routes,
  },

  populate,
};
