import React, { Component } from 'react';
import { render } from 'react-dom'
import Heading from './heading.jsx'
import Signup from './signup.jsx'
import Logup from './logup.jsx'
import App from './App.jsx'
import {  
    BrowserRouter as Router,  
    Routes,  
    Route,  
    Link,
    HashRouter
}   
from 'react-router-dom';  


class Login extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <HashRouter>
                <Routes>
                    <Route path = '/signin' element={<Logup />}/>
                    <Route path = '/' element={<Heading />}/>
                    <Route path = '/signup' element={<Signup />}/>
                    <Route path = '/app' element={<App />}/>
                </Routes>
            </HashRouter>
        )
    }
}

export default Login;