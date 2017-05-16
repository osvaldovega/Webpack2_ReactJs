import React, { Component } from 'react';
import Header from './Header/Header.jsx';
import NavMenu from './Header/Menu/Menu.jsx';
import '../../public/stylesheets/sass/index.scss';

class App extends Component {
  render() {
    return (
    <section>
      <Header appName='Universe'>
        <NavMenu />
      </Header>
      {this.props.children}
    </section>);
  }
}

export default App;
