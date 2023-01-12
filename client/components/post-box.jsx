import React, { Component } from 'react';
import { render } from 'react-dom';

class Post extends Component {
    constructor(props) {
        super(props);
        this.getId = this.getId.bind(this);
        this.getDeleteId = this.getDeleteId.bind(this);
    }

    getId() {
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

    render() {
        // var newDate = this.props.myData.date
        // var year = newDate.getFullYear();
        // var month = newDate.getMonth() + 1;
        // var day = newDate.getnewDate();
        // var hours = newDate.getHours();
        // var minutes = newDate.getMinutes();
        // console.log(`${month}/${day}/${year} at ${hours}:${minutes}`)

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
                    <button className='likePost' onClick={this.getId} id={this.props.id}>Like: {this.props.myData.likes}</button>
                    <input type='text' className='comment'></input>
                    <button className='postComment'>Add Comment</button>
                </div>
            </div>
        )
    }
}

export default Post;