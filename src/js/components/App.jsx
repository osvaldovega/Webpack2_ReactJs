import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Home from './Home.jsx';
import {
  selectedMenu,
  homeSelected,
  aboutSelected,
  contactSelected } from '../actions/actions';
import classNames from 'classnames';
import '../assets/sass/app.scss';

class App extends Component {
  render() {
    const { appName, tabs } = this.props;
    let activeTab = '';
    if (tabs.home) {
      activeTab = <Home name={appName} />;
    } else if (tabs.about) {
      activeTab = <About name={appName} />;
    } else {
      activeTab = <Contact name={appName} />;
    }

    return (
      <section>
				<article>
	        <ul>
	          <li onClick={() => this.props.homeSelected()} className={classNames({ active: tabs.home || '' })}>Home</li>
	          <li onClick={() => this.props.aboutSelected()} className={classNames({ active: tabs.about || '' })}>About</li>
	          <li onClick={() => this.props.contactSelected()} className={classNames({ active: tabs.contact || '' })}>Contact</li>
	        </ul>
        </article>
        {activeTab}
      </section>
    );
  }
}

// Ge the state from the store
function mapStateToProps(state) {
    return { tabs: state.App.tabs, appName: state.App.appName };
}

// Trigger the actions
function matchDispatchToProps(dispatch){
    return bindActionCreators({
      selectedMenu,
      homeSelected,
      aboutSelected,
      contactSelected
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(App);
