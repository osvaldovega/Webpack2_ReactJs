import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { selectedMenu } from '../actions/actions';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Home from './Home.jsx';
import classNames from 'classnames';
import '../assets/sass/app.scss';

class App extends Component {
  render() {
    let activeTab = '';
		let activePill = '';
    switch (this.props.tab.label) {
      case 'home':
        activeTab = <Home />;
				activePill = 'home';
        break;

      case 'about':
        activeTab = <About />;
				activePill = 'about';
        break;

      case 'contact':
        activeTab = <Contact />;
				activePill = 'contact';
        break;

      default:
        activeTab = <Home />;
				activePill = 'home';
        break;
    }

    return (
      <section>
				<article>
	        <ul>
	          <li onClick={() => this.props.selectedMenu('home')} className={classNames(activePill == 'home' ? 'active' : '')}>Home</li>
	          <li onClick={() => this.props.selectedMenu('about')} className={classNames(activePill == 'about' ? 'active' : '')}>About</li>
	          <li onClick={() => this.props.selectedMenu('contact')} className={classNames(activePill == 'contact' ? 'active' : '')}>Contact</li>
	        </ul>
				</article>
        {activeTab}
      </section>
    );
  }
};

// Ge the state from the store
function mapStateToProps(state) {
    return { tab: state.App };
}

// Trigger the actions
function matchDispatchToProps(dispatch){
    return bindActionCreators({selectedMenu}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(App);
