import React, { Component } from 'react'
import axios from 'axios'
import Card from '@material-ui/core/Card'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'

export default class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            post: {}
        }
    }
    componentDidMount() {
        axios.get('/api/' + this.props.match.params.id).then(response => {
            this.setState({ post: response['data'] })
        })
    }
    render() {
        const { post } = this.state
        return (
            <Container>
                    <Card>
                        <Paper>{post.title}</Paper>
                    </Card>
                    <Card>
                        <iframe src={post.link}></iframe>
                    </Card>
                    <Card id='transcript'>
                        <Paper>{post.post}</Paper>
                    </Card>
            </Container>
        )
    }
}