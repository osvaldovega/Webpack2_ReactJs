import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Apod extends Component {
  render() {
    const { element } = this.props;
    return (
      <article className={'Apod'}>
        <label>{element.title}</label>
        <img src={element.hdurl} />
        <figcaption>{element.explanation}</figcaption>
        <span>by {element.copyright}</span>
      </article>
    );
  }
}

Apod.PropTypes = {
  element: PropTypes.object.isRequired
};

export default Apod;
