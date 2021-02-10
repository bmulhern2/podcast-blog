import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      newTitle: '',
      newPost: '',
      newLink: '',
      posts: []
    }
    this.loadPosts = this.loadPosts.bind(this);
  }
  loadPosts = () => {
    axios.get('/api').then(response => {
      this.setState({ posts: [response.data] })
    })
  }
  componentDidMount = () => {
    this.loadPosts();
  }
  render() {
    console.log(this.state.posts)
  return (
    <Container mxWidth="xl" fixed>
      <Card>
        <CardContent>
          <AppBar position="static">
            <Toolbar>
              <IconButton edge='start'>
                <MenuIcon />
              </IconButton>
              <Link to="/new">New</Link>
            </Toolbar>
          </AppBar>
        </CardContent>
        <CardContent>
          <h1>Blog Posts</h1>
          {this.state.posts.map(post =>
          <p>
            <Link to={`/post/${post._id}`}>{post.title}</Link>
          </p>
          )}
        </CardContent>
      </Card>
    </Container>
  );
  }
}