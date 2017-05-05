import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchingData, fetchDataWithSaga } from '../actions/actions';
import Rover from './Rover/Rover.jsx';
import * as types from '../common/constants';

class Home extends Component {
  componentDidMount() {
    // If the data is NOT fetched then go
    if (!this.props.dataFetched) {
      // With REDUX THUNK
      this.props.fetchingData();

      // With REDUX SAGA
      // this.props.fetchDataWithSaga();
    }
  }

  render() {
    const { nasa, errorFetching, dataFetched } = this.props;
    let data = '';

    if (errorFetching.status) {
      data = (<div className={'Error_Message'}>{types.HOME_ERROR_MESSAGE_1} - {errorFetching.msg}</div>);
    } else if (dataFetched) {
      data = nasa.photos.map((element, index) =>
        <Rover key={index} element={element} />);
    } else {
      data = (<p className={'Loading'}>{types.HOME_LOADING}</p>);
    }

    return (
       <article className={'Home'}>
          <h1>{types.HOME_MAIN_TITLE}</h1>
          {data}
       </article>
    );
  }
}

// ======================================= //
// PROP TYPES
// ======================================= //
Home.propTypes = {
  nasa: PropTypes.object.isRequired,
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
    nasa: state.App.nasa,
    dataFetched: state.App.dataFetched,
    errorFetching: state.App.errorFetching
  };
}

// Trigger the actions
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ fetchingData, fetchDataWithSaga }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Home);
