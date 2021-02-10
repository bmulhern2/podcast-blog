import React, { Component } from 'react'
import axios from 'axios'
import Card from '@material-ui/core/Card'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import CardContent from '@material-ui/core/CardContent'

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
                         <CardContent>
                            <Paper>{post.title}</Paper>
                        </CardContent>
                        <CardContent>
                            <iframe autoplay src={post.link}></iframe>
                        </CardContent>
                        <CardContent>
                            <Paper>{post.post}</Paper>
                        </CardContent>
                    </Card>
            </Container>
        )
    }
}