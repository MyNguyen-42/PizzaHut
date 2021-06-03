export const GET_CATEGORY_REQUEST = 'GET_CATEGORY_REQUEST';
export const GET_CATEGORY_SUCCESS = 'GET_CATEGORY_SUCCESS';
export const GET_CATEGORY_FAIL = 'GET_CATEGORY_FAIL';

export const getCategoryRequest = () => {
  console.log('get Category Action');
  return {type: GET_CATEGORY_REQUEST};
};
export const getCategorySuccess = data => {
  return {type: GET_CATEGORY_SUCCESS, payload: {data}};
};
export const getCategoryFail = err => {
  return {type: GET_CATEGORY_FAIL, payload: {err}};
};
