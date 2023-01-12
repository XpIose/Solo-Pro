import React, { Component } from 'react';
import { render } from 'react-dom';
import PostContainer from './post-container.jsx'
import WritePost from './new-post.jsx'

class MainContainer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        // let listArr = []
        // for (let i = 0; i < x.length; i++) {
        //     listArr.push('<li><Post/></li>');
        // }
        return(
            <div>
                <ul>
                    {/* {listArr} */}
                    <WritePost
                    testFunc={this.props.testFunc}/>
                    <PostContainer 
                    postData={this.props.postData}
                    getNewData={this.props.getNewData}/>
                </ul>
            </div>
        )
    }
}

export default MainContainer;