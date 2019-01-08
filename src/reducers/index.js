const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_DATA':
      return { ...state, load: true };
    case 'DATA_RECEIVED':
      return { ...state, news: action.json, loading: false }
    default:
      return state;
  }
};

export default reducer;
