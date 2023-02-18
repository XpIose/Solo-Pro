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
        const option = process.env.NODE_ENV === 'production' 
        ? '/get' 
        : 'api/get'
        fetch(option)
        .then((res) => res.json())
        .then((data) => {
            // console.log(data)
            this.setState({ postData: data })
        })
        .catch(err => console.log(err))
    }

    delete(id) {
        const option = process.env.NODE_ENV === 'production' 
        ? '/delete' 
        : 'api/delete'
        fetch(option, { 
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(id),
        })
        const option2 = process.env.NODE_ENV === 'production' 
        ? '/get' 
        : 'api/get'
        fetch(option2)
        .then((res) => res.json())
        .then((data) => {
            // console.log(data)
            this.setState({ postData: data })
        })
        .catch(err => console.log(err))
    }

    like(id) {
        //ping server to update likes
        // console.log("id ", id) //post ID to update
        const option = process.env.NODE_ENV === 'production' 
        ? '/like' 
        : 'api/like'
        fetch(option, { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(id),
        })
        const option2 = process.env.NODE_ENV === 'production' 
        ? '/get' 
        : 'api/get'
        fetch(option2)     //update state
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
        // console.log('MESSAGE: ', msg)
        let send = { id: id, msg: msg }//.push(msg.toString())//{ text: msg }
        // console.log('SEND: ', send)
        const option = process.env.NODE_ENV === 'production' 
        ? '/comment' 
        : 'api/comment'
        fetch(option, { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(send),
        })
        const option2 = process.env.NODE_ENV === 'production' 
        ? '/get' 
        : 'api/get'
        fetch(option2)
        .then((res) => res.json())
        .then((data) => {
            console.log('comment data: ', data)
            this.setState({ postData: data })
        })
        .catch(err => console.log(err))
        document.getElementById('' + id._id + '').value = '';
    }
    

    testFunc = () => {
        let msg = document.getElementById('msg').innerHTML
        // console.log('MESSAGE: ', msg)
        let send = { input: msg }
        const option = process.env.NODE_ENV === 'production' 
        ? '/post' 
        : 'api/post'
        fetch(option, { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(send),
        })
        const option2 = process.env.NODE_ENV === 'production' 
        ? '/get' 
        : 'api/get'
        fetch(option2)
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