import React, { Component } from 'react';

class About extends Component {
   render() {
      return (
         <article>
            <h1>{this.props.name}</h1>
            <h3>About...</h3>
         </article>
      )
   }
}

export default About;
