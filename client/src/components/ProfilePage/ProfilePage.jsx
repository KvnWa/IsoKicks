import './ProfilePage.css';
import React, { useState, useEffect } from 'react'
import { Route, Switch } from "react-router-dom";
import axios from 'axios';

function ProfilePage({ signedIn, handleLogOut }) {


    return (
        <>
            <div className='profile-nav'>
                <div className='profile-left'>
                    <span className="profile-link">Account Information</span>
                    <span className="profile-link">Address Book</span>
                    <span className="profile-link">Payment Methods</span>
                    <span className="profile-link">Orders & Returns</span>
                    <span className="profile-link" onClick={handleLogOut}>Log Out</span>
                </div>
                <div className='profile-right'>
                    <div className='profile-right-1'>
                        <h2>Account Information</h2>
                        <h4>First Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Harris</h4>
                        <h4>Last Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sultan</h4>
                        <h4>Phone:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 917-123-4567</h4>
                        <h4>Password:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *****</h4>
                    </div>
                </div>
                <div className="profile-edit">
                    <h4>Edit</h4>
                </div>
            </div>
        </>
    )
}

export default ProfilePage