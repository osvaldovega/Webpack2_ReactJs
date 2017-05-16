import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchingRoverData } from '../../actions';
import * as types from '../../common/constants';
import Photo from './Camara/Photo.jsx';

class Rover extends Component {

  componentDidMount() {
    if (!this.props.dataFetched) {
      this.props.fetchingRoverData();
    }
  }

  render() {
    const { rover, dataFetched, errorFetching } = this.props;
    let data;

    if (errorFetching.status) {
      data = (
        <div className={'Error_Message'}>
          {types.HOME_ERROR_MESSAGE_1} - {errorFetching.msg}
        </div>
      );
    } else if (dataFetched) {
      data = rover.data.photos.map((e, i) => <Photo key={i} element={e} />);
    } else {
      data = (
        <p className={'Loading'}>
          {types.HOME_LOADING}
        </p>
      );
    }

    return (
      <section className={'Rover'}>
        {data}
      </section>
    );
  }
}

Rover.propTypes = {
  rover: PropTypes.object.isRequired,
  dataFetched: PropTypes.bool.isRequired,
  errorFetching: PropTypes.object.isRequired,
  fetchingRoverData: PropTypes.func
};

// ======================================= //
// REDUX PART
// ======================================= //

// Ge the state from the store
function mapStateToProps(state) {
  return {
    rover: state.Rover,
    dataFetched: state.Rover.dataFetched,
    errorFetching: state.Rover.errorFetching
  };
}

// Trigger the actions
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ fetchingRoverData }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Rover);
