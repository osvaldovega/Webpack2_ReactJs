import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { selectedMenu } from '../actions/actions';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Home from './Home.jsx';

class App extends Component {
  render() {
    let activeTab = '';
    switch (this.props.tab.label) {
      case 'home':
        activeTab = <Home />;
        break;

      case 'about':
        activeTab = <About />;
        break;

      case 'contact':
        activeTab = <Contact />;
        break;

      default:
        activeTab = <Home />;
        break;
    }

    return (
      <div>
        <ul>
          <li onClick={() => this.props.selectedMenu('home')}>Home</li>
          <li onClick={() => this.props.selectedMenu('about')}>About</li>
          <li onClick={() => this.props.selectedMenu('contact')}>Contact</li>
        </ul>
        {activeTab}
      </div>
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
