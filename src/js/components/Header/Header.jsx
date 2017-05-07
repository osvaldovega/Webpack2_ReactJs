import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    return (
      <article className={'Header'}>
        <h1>{this.props.appName}</h1>
        {this.props.children}
      </article>
    );
  }

}

// ======================================= //
// PROP TYPES
// ======================================= //
Header.propTypes = {
  appName: PropTypes.string.isRequired
};

// ======================================= //
// REDUX PART
// ======================================= //

// Ge the state from the store */
function mapStateToProps(state) {
  return {
    appName: state.universe.appName
  };
}

// Trigger the actions
function matchDispatchToProps(dispatch){
  return bindActionCreators({ }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Header);
