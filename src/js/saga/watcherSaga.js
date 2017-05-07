import { takeEvery } from 'redux-saga';
import { fetchData, fetchApodData } from './workerSaga';
import * as types from '../common/constants';

// Watcher Saga
export default function* watchFetchData() {
  yield takeEvery(types.FETCHING_APOD_DATA, fetchApodData);
  yield takeEvery(types.FETCHING_DATA, fetchData);
}
