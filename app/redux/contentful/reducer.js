import * as contentful from './actions';

const initialState = {
  entries: null,
  assets: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case contentful.SET_ENTRIES:
      return { ...state, entries: action.entries };
    case contentful.SET_ASSETS:
      console.log(action);
      return { ...state, assets: action.assets };
    default:
      return { ...state };
  }
};
