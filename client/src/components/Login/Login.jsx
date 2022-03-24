import React, { useState } from 'react'
import './Login.css';

const Login = () => {

    const [email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
    }

  return (
    <div className="container">
        <div className="section-customers">
            <div className="account-container">
                <ul className="account-nav">
                    <li>
                      <a href="" className="signin">SIGN IN</a>  
                    </li>
                    <li>
                        <a href="" className="create">CREATE ACCOUNT</a>
                    </li>
                </ul>
                <div className="customer-account">
                    <h3 className="customer-account-title"> My Account</h3>
                    <form>
                       <div className="form-group">
                          <label>Email Address</label>
                          <label>Password</label>

                       </div>
                    </form>
                </div>


            </div>
        </div>

    </div>
  )
}

export default Login