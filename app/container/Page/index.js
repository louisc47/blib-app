import { compose, lifecycle, withState } from 'recompose';
import { withNavigation } from 'react-navigation';

import Component from './component';
import contentful from '../../contentful';
import withHeader from '../../hoc/withHeader';
import { pathOr } from 'ramda';

export default compose(
  withHeader,
  withNavigation,
  withState('composants', 'setComposants', []),
  lifecycle({
    componentDidMount() {
      const entries = contentful.get.entries.id(
        this.props.navigation.getParam('id'),
      );
      composants = pathOr([], ['fields', 'composants', 'en-US'], entries);
      this.props.setComposants(contentful.populate(composants));
    },
  }),
)(Component);
