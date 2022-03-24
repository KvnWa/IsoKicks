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
                      <a href="" className="signin">Sign In</a>  
                    </li>
                    <li>
                        <a href="" className="create">Create Account</a>
                    </li>
                </ul>
                <div className="customer-account">
                    <h3 className="customer-account-title"> My Account</h3>
                    <form>
                        <input></input>
                        <input></input>
                    </form>
                </div>


            </div>
        </div>

    </div>
  )
}

export default Login