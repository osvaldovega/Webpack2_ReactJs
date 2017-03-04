import React, { Component } from 'react';

class Contact extends Component {
   render() {
      return (
         <article>
            <h1>{this.props.name}</h1>
            <h3>Contact...</h3>
         </article>
      )
   }
}

export default Contact;
