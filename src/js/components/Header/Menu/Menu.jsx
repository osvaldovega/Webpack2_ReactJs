import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

class NavMenu extends Component {
	render() {
		return (
			<section className={'Menu'}>
				<Link to="/">Home</Link>
				<Link to="About">About</Link>
			</section>
			);
	}

}

export default NavMenu;
