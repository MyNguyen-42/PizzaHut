import {takeLatest, call, put} from 'redux-saga/effects';
import axios from 'axios';
import {trackPromise} from 'react-promise-tracker';
import {
  GET_CATEGORY_REQUEST,
  getCategorySuccess,
  getCategoryFail,
} from './Category.Action';

function loadCategoriesApi() {
  console.log('loadCategories Api');

  const config = {
    method: 'get',
    url: 'https://api.pizzahut.vn/PZH_MIDDLEWARE_API/menu/GetCategory',
  };
  return trackPromise(
    axios(config)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        if (error.response) {
          console.log('Error 1');
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          return error.response;
        }
        if (error.request) {
          console.log('Error 2');
          console.log(error.request);
          return error.request;
        }
        console.log('Error 3');
        console.log('Error', error.message);

        console.log(error.config);
        return error.message;
      }),
  );
}

function* loadCategoriesFlow() {
  console.log('load categories saga');
  try {
    const response = yield call(loadCategoriesApi);
    console.log('data status: ', JSON.stringify(response.status));
    if (response.status === 200) {
      yield put(getCategorySuccess(response.data));
      console.log('load Categories success');
      console.log('data Categories: ', response);
    } else {
      yield put(getCategoryFail(response));
    }
  } catch (error) {
    console.log(error);
  }
}

function* loadCategoriesWatcher() {
  yield takeLatest(GET_CATEGORY_REQUEST, loadCategoriesFlow);
}

export default loadCategoriesWatcher;
