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


class Signup extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <form className='signin'>
                <h2>Sign Up</h2>
                <br/>
                <label className='username'>Username:
                    <input type='text' required placeholder='user name'/>
                </label>
                <br/>
                <label className='password'>Password:
                    <input type='password' required placeholder='1234'/>
                </label>
                <br/>
                <button>Sign Up</button>
                <Link  to = '/signin'> Sign In </Link>
            </form>
        )
    }
}

export default Signup