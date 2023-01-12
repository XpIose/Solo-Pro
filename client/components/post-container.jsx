import React, { Component } from 'react';
import { render } from 'react-dom';
import Post from './post-box.jsx'

class PostContainer extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getNewData();
    }
    render() {

        // console.log('new state: ', this.props.postData)
        const postArr = [];
        for (let i = 0; i < this.props.postData.length; i++) {
            postArr.unshift(
                <Post key={i} 
                id={this.props.postData[i]} 
                myData={this.props.postData[i]}
                like={this.props.like}
                delete={this.props.delete}
                comment={this.props.comment}/>
            )
        }

        return(
            <div className='postContainer'>
                {postArr}
            </div>
        )
    }
}

export default PostContainer;
