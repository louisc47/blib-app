import * as contentful from './actions';

const initialState = {
  entries: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case contentful.SET_ENTRIES:
      return { ...state, entries: action.entries };
    default:
      return { ...state };
  }
};
