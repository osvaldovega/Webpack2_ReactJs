import * as types from './actionTypes';
import NasaService from '../services/NasaService';

// Service Instance
const nasaService = new NasaService();

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
	return dispatch => nasaService.getNasaData()
		.then((result) => dispatch(fetchData(result)))
		.catch((err) => dispatch(errorFetchingData(`Fail => ${err}`)));
}
