import { compose, withProps, branch, renderComponent } from 'recompose';
import { connect } from 'react-redux';
import { pathOr } from 'ramda';

import contentful from '../../contentful';
import Component from './component';
import NewVersion from '../../container/NewVersion';
import packagejson from '../../../package.json';

export default compose(
  connect(state =>
    pathOr(
      {},
      ['fields', 'config', 'en-US'],
      pathOr([], ['contentful', 'entries'], state).find(e =>
        pathOr(false, ['sys', 'contentType', 'sys', 'id'], e),
      ),
    ),
  ),
  withProps(() => ({
    routes: contentful.get.routes(),
  })),
  branch(
    ({ version }) => version > packagejson.version,
    renderComponent(NewVersion),
  ),
)(Component);
