export const SET_ENTRIES = 'SET_ENTRIES';
export const SET_ASSETS = 'SET_ASSETS';

export const setEntries = entries => ({
  type: SET_ENTRIES,
  entries,
});

export const setAssets = assets => ({
  type: SET_ASSETS,
  assets,
});
