import React from "react";

export class Post extends React.Component {
    constructor() {
        super();
        this.state = {
            post: []
        }
    }
    componentDidMount() {
        fetch("http://grigorevai.beget.tech/php/getPosts.php")
            .then(response=>response.json())
            .then(result=>this.setState({post: result[0]}))
    }
    render() {
        return <div>
            <h1>{this.state.post.title}</h1>
            <p>Текст статьи: {this.state.post.text}</p>
            <p>Автор: {this.state.post.author}</p>
            <p>Дата добавления: {this.state.post.date_added}</p>
        </div>

    }
}
