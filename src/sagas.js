import {all} from 'redux-saga/effects';
import loadCategoriesWatcher from './Container/Category/Category.saga';

export default function* rootSaga() {
  yield all([loadCategoriesWatcher()]);
}
