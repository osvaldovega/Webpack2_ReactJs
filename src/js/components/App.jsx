import React, { Component } from 'react';
import Header from './Header/Header';
import '../../public/stylesheets/sass/index.scss';

class App extends Component {
	render() {
		return (
      <section>
        <Header />
        {this.props.children}
      </section>
		);
	}
}

export default App;
