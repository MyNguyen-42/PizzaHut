import {
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_FAIL,
} from './Category.Action';

const initialState = {requesting: false, data: null, err: null, success: false};

export const category = (state = initialState, action) => {
  console.log('reducer');
  switch (action.type) {
    case GET_CATEGORY_REQUEST:
      return {
        ...state,
        requesting: true,
        data: null,
        err: null,
      };
    case GET_CATEGORY_SUCCESS:
      return {
        ...state,
        requesting: false,
        data: action.payload.data,
        err: null,
        success: true,
      };
    case GET_CATEGORY_FAIL:
      return {
        ...state,
        success: false,
        requesting: false,
        data: null,
        err: action.payload.err,
      };
    default:
      return state;
  }
};
