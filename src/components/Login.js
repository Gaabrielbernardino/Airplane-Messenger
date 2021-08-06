import React from 'react';
import {GoogleOutlined , FacebookOutlined} from '@ant-design/icons';
import 'firebase/app'
import {ReactComponent as Logo} from '../Assets/air-messenger.svg'

import { auth } from '../firebase';
import firebase from 'firebase/app';



const Login = () => {
    return (
        <div id="login-page">
            <div id="login-card">
                <div className="login-logo">
                <Logo/>               
                </div>
                <div className="login-button google" onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
                    <GoogleOutlined /> Entre com sua conta Google
                </div>
                <br/> <br/>
                <div className="login-button facebook" onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}>
                    <FacebookOutlined /> Entre com sua conta Facebook
                </div>
            </div>
        </div>
    )
}


export default Login 