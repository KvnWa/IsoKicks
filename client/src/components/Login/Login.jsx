import React, { useState, useEffect, useLocation } from 'react';
import './Login.css'

function Login({ username, setUsername, password, setPassword, handleLogInSubmit, signUpFirstName, setSignUpFirstName, signUpLastName, setSignUpLastName, signUpUsername, setSignUpUsername, signUpPassword, setSignUpPassword, signUpPasswordConfirmation, setSignUpPasswordConfirmation, handleSignUpSubmit, signedIn }) {

    const [formType, setFormType] = useState(true)

    function onFormClick() {
        setFormType(formType => !formType)
    }




    

    return (
        <div className="sign-container">
        <div className='signin'>
            <div className={formType ? "container" : "container right-panel-active"} id="container">
                <div className="form2-container">
                    <div className="form-container sign-up-container">
                        <form className='form2-form' action="#">
                            <h1 className='form2-create'>Create Account</h1>

                            <div className='form2-input-fullname'>
                                <input className='form2-input-name' type="text" placeholder="First Name" value={signUpFirstName} onChange={(e) => { setSignUpFirstName(e.target.value) }} />
                                <input className='form2-input-name last' type="text" placeholder="Last Name" value={signUpLastName} onChange={(e) => { setSignUpLastName(e.target.value) }} />
                            </div>
                            <input className='form2-input' type="text" placeholder="Username" value={signUpUsername} onChange={(e) => setSignUpUsername(e.target.value)} />
                            <input className='form2-input' type="password" placeholder="Password" value={signUpPassword} onChange={(e) => setSignUpPassword(e.target.value)} />
                            <input className='form2-input-end' type="password" placeholder="Password Confirmation" value={signUpPasswordConfirmation} onChange={(e) => setSignUpPasswordConfirmation(e.target.value)} />
                            <button className='form2-button' onClick={handleSignUpSubmit} >Sign Up</button>
                        </form>
                    </div>
                    <div className="form-container sign-in-container">
                        <form className='form2-form' action="#">
                            <h1 className='form2-signin-title'>Sign in</h1>
                            <input className='form2-input' type="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                            <input className='form2-input' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <a className='form2-a' href="">Forgot your password?</a>
                            <button className='form2-button' onClick={handleLogInSubmit}>Sign In</button>
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h1 className='form2-welcome'>Already have an Account?</h1>
                                <p className='form2-subtitle'>Sign in to get started</p>
                                <button onClick={onFormClick} className=" form2-button ghost" id="signIn">Sign In</button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1 className='form2-welcome'>Welcome</h1>
                                <p className='form2-subtitle'>Hello friend, looks like you're new here. We need some info.</p>
                                <button onClick={onFormClick} className="form2-button ghost" id="signUp">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>

    )
}

export default Login