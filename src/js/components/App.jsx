import React, { Component } from 'react';
import Header from './Header/Header';
import NavMenu from './Header/Menu/Menu';
import '../../public/stylesheets/sass/index.scss';

class App extends Component {
  render() {
    return (
    <section>
      <Header>
        <NavMenu />
      </Header>
      {this.props.children}
    </section>);
  }
}

export default App;
