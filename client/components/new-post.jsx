import React, { Component } from 'react';
import { render } from 'react-dom';

class WritePost extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return(
            <div className='postId'>
                <input type="text" id="msg" className='msg'></input>
                <button id="send" className='send' onClick={this.props.testFunc}>Post</button>
            </div>
        )
    }
}

export default WritePost;