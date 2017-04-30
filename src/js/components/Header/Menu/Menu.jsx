import React, { Component } from 'react';
import { Link } from 'react-router';
import * as types from '../../../common/constants';

class NavMenu extends Component {
  render() {
    return (
      <section className={'Menu'}>
        <Link to="/">{types.MENU_LINK_1}</Link>
        <Link to="About">{types.MENU_LINK_2}</Link>
      </section>
    );
  }
}

export default NavMenu;
