import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Post from './components/Post';
import Form from './components/Form'

ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={App} />
      <Route path='/post/:id' component={Post} />
      <Route path="/new" component={Form} />
    </div>
  </Router>,
  document.getElementById('root')
);