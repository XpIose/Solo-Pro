import React, { Component } from 'react';
import { render } from 'react-dom';
// import ContentEditable from 'react-contenteditable'

class WritePost extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return(
            <div className='postId'>
                {/* <input type='text' id="msg" className='msg' size='1'></input> */}
                
                    <span className="msg" id='msg' role="textbox" contentEditable></span>
                
                <button id="send" className='send' onClick={this.props.testFunc}>Post</button>
            </div>
        )
    }
}

export default WritePost;