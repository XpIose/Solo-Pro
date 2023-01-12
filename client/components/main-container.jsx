import React, { Component } from 'react';
import { render } from 'react-dom';
import PostContainer from './post-container.jsx'
import WritePost from './new-post.jsx'

class MainContainer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <ul>
                    {/* {listArr} */}
                    <WritePost
                    testFunc={this.props.testFunc}/>
                    <PostContainer 
                    postData={this.props.postData}
                    getNewData={this.props.getNewData}
                    like={this.props.like}
                    delete={this.props.delete}
                    comment={this.props.comment}/>
                </ul>
            </div>
        )
    }
}

export default MainContainer;