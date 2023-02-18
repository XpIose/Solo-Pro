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
    setUser(e) {
        // console.log(e)
        this.setState({user: e})
        console.log(this.state)
        return e
    }
    setEmail(e) {
        this.setState({email: e})
        return e
    }
    setPass(e) {
        this.setState({pass: e})
        return e
    }
    handleSignup() {
        fetch('/api/users')
    }
    render() {
        return (
            <form className='signin' onSubmit={this.handleSignup}>
                <h2>Sign Up</h2>
                <br/>
                {/* <label className='username'>Username: */}
                    <input type='text' 
                    required 
                    placeholder='Username'
                    // value={user}
                    onChange={(e) => this.setUser(e.target.value)}/>
                {/* </label> */}
                <br/>
                {/* <label className='password'>Password: */}
                    <input type='password' 
                    required 
                    placeholder='Password'
                    // value={password}
                    onChange={(e) => this.setPass(e.target.value)}/>
                {/* </label> */}
                <br/>
                <input type='text' 
                required 
                placeholder='E-mail'
                // value={email}
                onChange={(e) => this.setEmail(e.target.value)}/>
                <br/>
                <button>Sign Up</button>
                <Link  to = '/signin'> Sign In </Link>
            </form>
        )
    }
}

export default Signup