
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { Router, Route, hashHistory  } from 'react-router'
import { Home } from './components/Home'
import { About } from './components/About'
import { Contact } from './components/Contact'

ReactDOM.render((
<Router history={hashHistory}>
  <Route path = "/" component = {App} >
    <Route path = "home" component = {Home} />
    <Route path = "about" component = {About} />
    <Route path = "contact" component = {Contact} />
  </Route>
</Router>
), document.getElementById('app'))
