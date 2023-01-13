import React, { Component } from 'react';
import { render } from 'react-dom'
// import App from './App.jsx'
// import Signup from './signup.jsx'
import {  
    BrowserRouter as Router,  
    Routes,  
    Route,  
    Link  
}   
from 'react-router-dom';  


class Logup extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <form className='signin'>
                <h2>Sign In</h2>
                <br/>
                <label className='username'>Username:
                    <input type='text' required placeholder='user name'/>
                </label>
                <br/>
                <label className='password'>Password:
                    <input type='password' required placeholder='1234'/>
                </label>
                <br/>
                <button>Sign In</button>
                <Link  to = '/App'> Enter App </Link>
            </form>
        )
    }
}

export default Logup