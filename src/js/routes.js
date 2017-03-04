import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Rotue, Link, browserHistory, IndexRoute } from 'react-router';
import App from './components/App.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';

export default function createdRoutes(history) {
  return (<Router history = {browserHistory}>
            <Route path = "/" component = {App}>
              <IndexRoute component = {Home} />
              <Route path = "/home" component = {Home} />
              <Route path = "/about" component = {About} />
              <Route path = "/contact" component = {Contact} />
            </Route>
          </Router>,
          document.getElementById('app')
        );
}
