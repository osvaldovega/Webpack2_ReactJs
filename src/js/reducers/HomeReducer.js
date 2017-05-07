import initState from '../store/initialState';
import * as types from '../common/constants';

export default function homeReducer(state = initState, action) {
  // Make a copy of the tabs from the state, this will be change

  switch (action.type) {
    case types.FETCHING_DATA_SUCCESS:
      return {
        ...state,
        rover: {
          data: action.payload,
          dataFetched: true,
          errorFetching: {
            status: false,
            msg: ''
          }
        }
      };

    case types.FETCHING_DATA_ERROR:
      return {
        ...state,
        rover: {
          data: {},
          dataFetched: false,
          errorFetching: {
            status: true,
            msg: action.payload
          }
        }
      };

    case types.FETCHING_APOD_DATA_SUCCESS:
      return {
        ...state,
        apod: {
          data: action.payload,
          dataFetched: true,
          errorFetching: {
            status: false,
            msg: ''
          }
        }
      };

    case types.FETCHING_APOD_DATA_ERROR:
      return {
        ...state,
        apod: {
          data: {},
          dataFetched: false,
          errorFetching: {
            status: true,
            msg: action.payload
          }
        }
      };

    default:
      return state;
  }
}
