import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchApodData, fetchApodDataSaga } from '../actions';
import Apod from './Apod/Apod.jsx';
import * as types from '../common/constants';

class Home extends Component {
  componentDidMount() {
    // If the data is NOT fetched then go
    if (!this.props.dataFetched) {
      // With REDUX THUNK
      this.props.fetchApodData();

      // With REDUX SAGA
      // this.props.fetchApodDataSaga();
    }
  }

  render() {
    const { apod, errorFetching, dataFetched } = this.props;
    let data = '';

    if (errorFetching.status) {
      data = (
        <div className={'Error_Message'}>
          {types.HOME_ERROR_MESSAGE_1} - {errorFetching.msg}
        </div>
      );
    } else if (dataFetched) {
      data = (
        <Apod element={apod} />
      );
    } else {
      data = (
        <p className={'Loading'}>
          {types.HOME_LOADING}
        </p>
      );
    }

    return (
       <article className={'Home'}>
          {data}
       </article>
    );
  }
}

// ======================================= //
// PROP TYPES
// ======================================= //
Home.propTypes = {
  apod: PropTypes.object.isRequired,
  dataFetched: PropTypes.bool.isRequired,
  errorFetching: PropTypes.object.isRequired,
  fetchingData: PropTypes.func
};

// ======================================= //
// REDUX PART
// ======================================= //

// Ge the state from the store
function mapStateToProps(state) {
  return {
    apod: state.Apod.data,
    dataFetched: state.Apod.dataFetched,
    errorFetching: state.Apod.errorFetching
  };
}

// Trigger the actions
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ fetchApodData, fetchApodDataSaga }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Home);
