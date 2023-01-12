import React, { Component } from 'react';
import render from 'react-dom'
import MainContainer from './components/main-container.jsx'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { postData: 'defaultState'};
        this.getNewData = this.getNewData.bind(this);
        this.testFunc = this.testFunc.bind(this);
        this.like = this.like.bind(this);
        this.delete = this.delete.bind(this);
        this.comment = this.comment.bind(this);
    }
    getNewData() {
        fetch('/api')
        .then((res) => res.json())
        .then((data) => {
            // console.log(data)
            this.setState({ postData: data })
        })
        .catch(err => console.log(err))
    }

    delete(id) {
        fetch('/api/delete', { 
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(id),
        })
        fetch('/api')
        .then((res) => res.json())
        .then((data) => {
            // console.log(data)
            this.setState({ postData: data })
        })
        .catch(err => console.log(err))
    }

    like(id) {
        //ping server to update likes
        console.log("id ", id)
        fetch('/api/like', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(id),
        })
        fetch('/api')
        .then((res) => res.json())
        .then((data) => {
            // console.log(data)
            this.setState({ postData: data })
        })
        .catch(err => console.log(err))
    }

    comment(id) {
        //ping server to update comments
        let msg = document.getElementById('' + id._id + '').value
        console.log('MESSAGE: ', msg)
        let send = { id: id, msg: msg }//.push(msg.toString())//{ text: msg }
        console.log('SENDD: ', send)
        // console.log("COMMENT id ", id)
        fetch('/api/comment', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(send),
        })
        console.log('dont go here yet')
        fetch('/api')
        .then((res) => res.json())
        .then((data) => {
            console.log('comment data: ', data)
            this.setState({ postData: data })
        })
        .catch(err => console.log(err))
    }
    

    testFunc = () => {
        let msg = document.getElementById('msg').innerHTML
        console.log('MESSAGE: ', msg)
        let send = { input: msg }
        fetch('/api/post', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(send),
        })
        fetch('/api')
        .then((res) => res.json())
        .then((data) => {
            // console.log(data)
            this.setState({ postData: data })
        })
        .catch(err => console.log(err))
        console.log('message posted');
        msg = document.getElementById('msg').innerHTML = '';
    }

    render() {
        return (
            <div>
                <MainContainer 
                postData={this.state.postData}
                getNewData={this.getNewData}
                testFunc={this.testFunc}
                like={this.like}
                delete={this.delete}
                comment={this.comment}/>
            </div>
        )
    }
}

export default App;