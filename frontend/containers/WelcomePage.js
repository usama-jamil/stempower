import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {withRouter} from 'react-router-dom';
import { Redirect } from 'react-router';
import { createHashHistory } from 'history';
import Login from '../components/Login';
import Signup from '../components/Signup';

const WelcomeScreen = (props) => {
    return (
        <div>
            <b>Stempower</b>
            <div>
                <h>Welcome to the Stempower website!</h><br/>
                <p>Please login or sign up if you don't have an account</p><br/>
                <button type="submit" onClick={() => props.history.push('/login')}>Login</button>
                <button type="submit" onClick={() => props.history.push('/signup')}>Signup</button>
            </div>
        </div>
        
    );
}

export default WelcomeScreen;