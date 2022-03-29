import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import grailed from '../images/grailed.jpeg'
import './Login.css';
import { useHistory } from 'react-router-dom'

const Login = ({ setUser }) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [ full_name, setFull_Name ] = useState("")
    const [errors, setErrors ] = useState([]);
    const [formType, setFormType ] = useState(true)

    const history = useHistory();

    function onFormClick() {
        setFormType(formType => !formType)
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username, password}),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => {
                    setUser(user)
                    history.push('/cart')
                });
            } else {
                r.json().then((error) => setErrors(error.errors));
            }
        });
    }

    function handleSignup(e) {
        e.preventDefault();
        fetch('/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
                full_name
            }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => { setUser(user)
                    history.push('/')
                });
            } else {
                r.json().then((error) => alert(error.errors));
            }
        });
    }


    return (
        <div className="bigcontainer">
        <div className={formType ? "container" : "container right-panel-active"} id="container">
            <div className="form-container sign-up-container">
                <form onSubmit={handleSignup}>
                    <h1>Create Account</h1>
                    <div className="social-container">
                       
                    </div>
                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <input type="email" placeholder="Full Name" value={full_name} onChange={(e) => setFull_Name(e.target.value)}/>
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <button className="button1" onClick={handleSignup}>Sign Up</button>
                </form>
            </div>
            <div className="form-container sign-in-container">
                <form onSubmit={handleSubmit}>
                    <h1>Sign in</h1>
                    <div className="social-container">
            
                    </div>
                    <input type="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <a href="#">Forgot your password?</a>
                    <button onClick={handleSubmit} >Sign In</button>
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