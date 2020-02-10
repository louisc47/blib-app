import {
  compose,
  withState,
  withHandlers,
  branch,
  renderComponent,
} from 'recompose';

import NonActive from './nonActive';
import Form from './form';
import Active from './active';

export default compose(
  withState('formIsActive', 'setFormIsActive', false),
  withState('carteIsActive', 'setCarteIsActive', false),
  withHandlers({
    toogleForm: ({ formIsActive, setFormIsActive }) => () => {
      setFormIsActive(!formIsActive);
    },
    toogleCarte: ({ carteIsActive, setCarteIsActive }) => () => {
      setCarteIsActive(!carteIsActive);
    },
  }),
  branch(({ carteIsActive }) => carteIsActive, renderComponent(Active)),
  branch(({ formIsActive }) => formIsActive, renderComponent(Form)),
)(NonActive);
