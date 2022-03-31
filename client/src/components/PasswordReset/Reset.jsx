import React, { useState } from 'react'
import axios from 'axios';
import './Reset.css';

function Reset({user}) {

    const [ newName, setNewName ] = useState("")

    // function handleUsernameChange(e) {
    //     e.preventDefault()
    //     axios.patch(`/users/${user.id}`, {
    //       username: newName
    //     })
    //   }

      const handleUsernameChange = (e) => {
        e.prerventDefault();
        fetch(`/users/${user.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: newName
          }),
        }).then((r) => r.json())

    
       
      };
     
  return (
    <div className="reset-container">
        <div className="reset-title">
            <h1>Edit Username</h1>
            <form className="reset-form">
                <input className="reset-input" type="text" placeholder='Enter New Username' required={true} onChange={(e) => { setNewName(e.target.value) }}></input>
                <div className="div-between"></div>
                <button onClick={handleUsernameChange} className="reset-btn">Update</button>
            </form>
        </div>

    </div>
  )
}

export default Reset