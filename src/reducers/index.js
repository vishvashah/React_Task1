const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_DATA':
      return { ...state, load: true };
    case 'DATA_RECEIVED':
      return { ...state, news: action.payload, loading: false }
      case 'FAIL_DATA':
      return { ...state, news: action, loading: false }
    default:
      return state;
  }
};

export default reducer;
