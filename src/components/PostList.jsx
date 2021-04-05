import React from 'react';
import {Link} from "react-router-dom";

function Tr(props){
    return   <tr>
        <th scope="row">{props.index}</th>
        <td><Link to="/post">{props.title}</Link></td>
        <td>{props.author}</td>
        <td>{props.date_added}</td>
    </tr>
}

export class PostList extends React.Component{
    constructor() {
        super();
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        console.log("Компонент постлист отрисован");
        fetch("http://grigorevai.beget.tech/php/getPosts.php")
            .then(response=>response.json())
            .then(result=>{
                console.log(result);
                for (let i = 0; i < result.length; i++){
                    this.setState({
                        posts: this.state.posts.concat(<Tr key={i} index={i+1} title={result[i].title} author={result[i].author} date_added ={result[i].date_added}/>)
                    })
                }
            })
    }

    render() {
        console.log("Компонент постлист рисуется")
        return <table className="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Заголовок</th>
                <th scope="col">Автор</th>
                <th scope="col">Дата добавления</th>
            </tr>
            </thead>
            <tbody>
                {this.state.posts}
            </tbody>
        </table>
    }
}