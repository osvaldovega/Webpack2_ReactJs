import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from './Header/Header';
import '../../public/stylesheets/sass/index.scss';

class App extends Component {
  render() {
    return (
      <section>
        <Header appName={this.props.appName} />
        {this.props.children}
      </section>
    );
  }
}

// Ge the state from the store */
function mapStateToProps(state) {
  return { appName: state.App.appName };
}

// Trigger the actions
function matchDispatchToProps(dispatch){
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(App);
