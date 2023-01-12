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


class Heading extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div style={ {display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px'} }>
                <Link to = '/signin' style={{marginRight: '25px'}}> Sign In </Link>
                <Link to = '/signup'> Sign Up </Link>
            </div>
        )
    }
}

export default Heading;