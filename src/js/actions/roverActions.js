import * as types from '../common/constants';
import NasaService from '../services/NasaService';

// Service Instance
const nasaService = new NasaService();

// -------- REDUX THUNK ----------//
function fetchData(data) {
  return {
    type: types.FETCHING_ROVER_DATA_SUCCESS,
    payload: data
  };
}

function errorFetchingData(err) {
  return {
    type: types.FETCHING_ROVER_DATA_ERROR,
    payload: err
  };
}

// Gets data from NASA
export function fetchingRoverData() {
  return dispatch => nasaService.getRoversData()
    .then(result => dispatch(fetchData(result)))
    .catch(err => dispatch(errorFetchingData(`${err}`)));
}
