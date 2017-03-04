import React, { Component } from 'react';

class Home extends Component {
   render() {
      return (
         <article>
            <h1>{this.props.name}</h1>
            <h3>Home...</h3>
            <p>This is a test 77</p>
         </article>
      )
   }
}

export default Home;
