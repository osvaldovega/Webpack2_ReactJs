import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as types from '../../common/constants';

class Rover extends Component {
  render() {
    const { element } = this.props;
    return (
      <section className={'Rover'}>
        <label>{types.ROVER_TITLE}: {element.rover.name}</label>
        <img src={element.img_src} />
        <p>{types.ROVER_DESCRIPTION_1}: {element.id}</p>
      </section>
    );
  }
}

Rover.PropTypes = {
  element: PropTypes.object.isRequired
};

export default Rover;
