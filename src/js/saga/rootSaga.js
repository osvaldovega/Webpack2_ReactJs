import watchFetchData from './watcherSaga';

// Single entry point to start sagas at once
export default function* rootSaga() {
  yield [
    watchFetchData()
  ];
}
