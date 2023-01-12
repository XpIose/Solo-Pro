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
                <label className='username'>E-mail:
                    <input type='text' required placeholder='foobar@gmail.com'/>
                </label>
                <br/>
                <label className='password'>Password:
                    <input type='password' required placeholder='1234'/>
                </label>
                <br/>
                <button>Sign Up</button>
            </form>
        )
    }
}

export default Signup