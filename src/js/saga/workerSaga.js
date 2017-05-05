import { call, put } from 'redux-saga/effects';
import * as types from '../common/constants';
import NasaService from '../services/NasaService';

// Service Instance
const nasaService = new NasaService();

// Worker Saga
export default function* fetchData() {
  try {
    // Make a API call using the NASA Service
    const response = yield nasaService.getNasaData();

    // If data response ok
    yield put({ type: types.FETCHING_DATA_SUCCESS, payload: response });
  } catch (e) {
    // If error
    yield put({ type: types.FETCHING_DATA_ERROR, payload: e.message });
  }
}
