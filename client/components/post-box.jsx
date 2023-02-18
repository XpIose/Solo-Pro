import React, { Component } from 'react';
import { render } from 'react-dom';
import CommentContainer from './comments-container.jsx';

class Post extends Component {
    constructor(props) {
        super(props);
        this.getId = this.getId.bind(this);
        this.getDeleteId = this.getDeleteId.bind(this);
        this.getCommentId = this.getCommentId.bind(this);
    }

    getId() { // USES CALLBACK RIGHT NOW
        // console.log(this.props)
        const id = this.props.id
        // console.log(this.state)
        this.props.like(id)
    }

    getDeleteId() {
        const id = this.props.id
        // console.log(this.state)
        this.props.delete(id)
    }

    getCommentId() {
        const id = this.props.id
        // console.log(this.state)
        this.props.comment(id)
    }

    render() {

        const commentsArr = []
        const arr = this.props.myData.comments
        if (arr) {
            // console.log('array has length')
            // console.log(arr[0])
            // console.log('array test:', Array.isArray(arr))
            // console.log('elemet test:', arr.forEach(el => console.log(el)))
            for (let i = 0; i < this.props.myData.comments.length; i++){
            commentsArr.unshift(<CommentContainer 
                // comments={this.props.id.comments} 
                name={this.props.myData.comments[i].name}
                text={this.props.myData.comments[i].text}
                id={i}
                key={i}/>)
        }
        }
        return(
            <div className='post'>
                {/* <div className='user'>@rylan</div> */}
                <div className='info'>
                    <div className='user'>@{this.props.myData.name}</div>
                    
                    <button className='deletePost' onClick={this.getDeleteId} id={this.props.id}>Delete</button>
                </div>
                <div className='date'>{this.props.myData.date}</div>
                <div className='text'>{this.props.myData.input}</div>
                <div className='response'>
                    <button className='likePost' onClick={() => this.props.like(this.props.id)} id={this.props.id}>Like: {this.props.myData.likes}</button>
                    <input type='text' className='comment' placeholder='Comments' id={this.props.myData._id}></input>
                    <button className='postComment'  onClick={this.getCommentId}>Add Comment</button>
                </div>
                <div className='commentContainer' id='commentContainer'>
                    {commentsArr}
                    {/* <CommentContainer/> */}
                </div>
            </div>
        )
    }
}

export default Post;