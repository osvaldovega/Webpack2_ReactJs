import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Photo extends Component {
  render() {
    const { element } = this.props;
    return (
      <section className={'Camara'}>
        <h1>{element.id}</h1>
      </section>
    );
  }
}

Photo.PropTypes = {
  element: PropTypes.object.isRequired
};

export default Photo;
