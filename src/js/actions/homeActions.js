import * as types from '../common/constants';
import NasaService from '../services/NasaService';

// Service Instance
const nasaService = new NasaService();

// -------- REDUX THUNK ----------//
function fetchData(data) {
  return {
    type: types.FETCHING_DATA_SUCCESS,
    payload: data
  };
}

function errorFetchingData(err) {
  return {
    type: types.FETCHING_DATA_ERROR,
    payload: err
  };
}

// Gets data from NASA
export function fetchingData() {
  return dispatch => nasaService.getRoversData()
    .then(result => dispatch(fetchData(result)))
    .catch(err => dispatch(errorFetchingData(`${err}`)));
}

// Fetch NASA APOD Data
function fetchApodDataSuccess(data) {
  return {
    type: types.FETCHING_APOD_DATA_SUCCESS,
    payload: data
  };
}

function fetchApodDataError(err) {
  return {
    type: types.FETCHING_APOD_DATA_ERROR,
    payload: err
  };
}

export function fetchApodData() {
  return dispatch => nasaService.getApodData()
    .then(result => dispatch(fetchApodDataSuccess(result)))
    .catch(err => dispatch(fetchApodDataError(`${err}`)));
}

// ---------- REDUX SAGA ---------//
export function fetchDataWithSaga() {
  return {
    type: types.FETCHING_DATA
  };
}

// Fetch NASA APO data SAGA
export function fetchApodDataSaga() {
  return { type: types.FETCHING_APOD_DATA };
}
