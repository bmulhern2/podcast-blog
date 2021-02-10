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
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePostChange = this.handlePostChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleLinkChange = this.handleLinkChange.bind(this);
  }
  componentDidMount() {
    axios.get('/api').then(response => {
      this.setState({ posts: response['data'] })
    })
  }
  handleTitleChange(e) {
    console.log(e.target.value);
    this.setState({ newTitle: e.target.value });
  }
  handlePostChange(e) {
    console.log(e.target.value);
    this.setState({ newPost: e.target.value })
  }
  handleLinkChange(e) {
    console.log(e.target.value)
    this.setState({ newLink: e.target.value })
  }
  handleSubmit(e) {
    e.preventDefault();
    const { newTitle, newPost, newLink } = this.state;
    const jsonToSend = {
      title: newTitle,
      post: newPost,
      link: newLink
    }
    axios.post('/api', jsonToSend).then(res => {
      console.log(res)
    })
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
            </Toolbar>
          </AppBar>
        </CardContent>
        <CardContent>
          <form onSubmit={this.handleSubmit}>
            <TextField id="outlined-basic" label="Title" variant="outlined" onChange={this.handleTitleChange} />
            <br></br>
            <TextField id="outlined-basic" label="Post" variant="outlined" onChange={this.handlePostChange} />
            <br></br>
            <TextField id="outlined-basic" label="Link" variant="outlined" onChange={this.handleLinkChange} />
            <br></br>
            <Button type="submit" variant="contained">Add Post</Button>
          </form>
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