import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import grailed from '../images/grailed.jpeg'
import './Login.css';

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [formType, setFormType ] = useState(true)

    function onFormClick() {
        setFormType(formType => !formType)
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div className="bigcontainer">
        <div className={formType ? "container" : "container right-panel-active"} id="container">
            <div className="form-container sign-up-container">
                <form action="#">
                    <h1>Create Account</h1>
                    <div className="social-container">
                        <a href="#" className="social"><FontAwesomeIcon icon="fa-brands fa-google-plus-g" /></a>
                        <a href="#" className="social"><FontAwesomeIcon icon="fa-brands fa-google-plus-g" /></a>
                        <a href="#" className="social"><FontAwesomeIcon icon="fa-brands fa-google-plus-g" /></a>
                    </div>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button >Sign Up</button>
                </form>
            </div>
            <div className="form-container sign-in-container">
                <form action="#">
                    <h1>Sign in</h1>
                    <div className="social-container">
                        <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                        <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <a href="#">Forgot your password?</a>
                    <button >Sign In</button>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>Sign in to get started.</p>
                        <button onClick={onFormClick} className="ghost" id="signIn">Sign In</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p>Looks like you’re new here. We need some info. </p>
                        <button onClick={onFormClick} className="ghost" id="signUp">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
        </div>

    )
}

export default Login