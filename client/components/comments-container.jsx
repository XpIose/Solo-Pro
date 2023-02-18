import React, { Component } from 'react';
import { render } from 'react-dom';
// import Post from './post-box.jsx'

class CommentContainer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        // if (this.props.name !== undefined) {
            // let name = this.props.name + ":"
        // }
        return(
            <div className='singleComment' id='singleComment'>
                <div className='commentUser' id='commentUser'>
                    {this.props.name}
                </div>
                <div className='theComment' id='theComment'>
                    {this.props.text}
                </div>
            </div>
        )
    }
}

export default CommentContainer;