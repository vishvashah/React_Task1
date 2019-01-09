export const getData = (data) => ({
  type: 'GET_DATA',
  payload: data
});
export const fetchData = (data) => ({
  type: 'DATA_RECEIVED',
  payload: data
});
export const fail = (error) =>({
  type: 'FAIL_DATA',
  
});


