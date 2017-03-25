import React, { Component } from 'react';
import NavMenu from './Menu/Menu';
import classNames from 'classnames';

class Header extends Component {
	render() {
		return (
			<article className={'Header'}>
				<h1>{this.props.appName}</h1>
				<NavMenu />
			</article>
			);
	}

}

export default Header;
