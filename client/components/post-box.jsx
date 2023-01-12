import React, { Component } from 'react';
import { render } from 'react-dom';

class Post extends Component {
    constructor(props) {
        super(props);
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
                    <div className='date'>{this.props.myData.date}</div>
                </div>
                <div className='text'>{this.props.myData.input}</div>
                <div className='response'>
                    <button className='likePost'>Like: {this.props.myData.likes}</button>
                    <input type='text' className='comment'></input>
                    <button className='postComment'>Add Comment</button>
                </div>
            </div>
        )
    }
}

export default Post;