import { pathOr } from 'ramda';
import store from '../../redux/store';

export default id =>
  pathOr([], ['contentful', 'entries'], store.getState()).find(
    e => pathOr(null, ['sys', 'id'], e) == id,
  );
