import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NavMenu from './Menu/Menu';

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

// Ge the state from the store */
function mapStateToProps(state) {
	return {
		appName: state.App.appName
	};
}

// Trigger the actions
function matchDispatchToProps(dispatch){
	return bindActionCreators({ }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Header);
