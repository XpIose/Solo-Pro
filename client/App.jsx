import React, { Component } from 'react';
import render from 'react-dom'
import MainContainer from './components/main-container.jsx'
// import './style.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { postData: 'defaultState'};
        this.getNewData = this.getNewData.bind(this);
        this.testFunc = this.testFunc.bind(this);
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
    like() {
        //ping server to update likes
    }
    testFunc = () => {
        fetch('/api/post', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({}),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            // this.setState({ postData: data })
        })
        console.log('message posted');
    }

    render() {
        return (
            <div>
                <MainContainer 
                postData={this.state.postData}
                getNewData={this.getNewData}
                testFunc={this.testFunc}/>
            </div>
        )
    }
}

export default App;