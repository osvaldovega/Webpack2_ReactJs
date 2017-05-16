import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

export default Header;
