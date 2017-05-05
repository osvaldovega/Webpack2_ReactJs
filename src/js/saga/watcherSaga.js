import { takeEvery } from 'redux-saga';
import fetchData from './workerSaga';
import * as types from '../common/constants';

// Watcher Saga
export default function* watchFetchData() {
  yield takeEvery(types.FETCHING_DATA, fetchData);
}
