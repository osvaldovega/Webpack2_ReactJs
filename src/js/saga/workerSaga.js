import { call, put } from 'redux-saga/effects';
import * as types from '../common/constants';
import NasaService from '../services/NasaService';

// Service Instance
const nasaService = new NasaService();

// Fetch NASA ROVERS Data
export function* fetchData() {
  try {
    // Make a API call using the NASA Service
    const response = yield nasaService.getRoversData();

    // If data response ok
    yield put({ type: types.FETCHING_DATA_SUCCESS, payload: response });
  } catch (e) {
    // If error
    yield put({ type: types.FETCHING_DATA_ERROR, payload: e.message });
  }
}

// Fetch NASA APOD Data
export function* fetchApodData() {
  try {
    const response = yield nasaService.getApodData();
    yield put({ type: types.FETCHING_APOD_DATA_SUCCESS, payload: response });
  } catch (e) {
    yield put({ type: types.FETCHING_APOD_DATA_ERROR, payload: e.message });
  }
}
