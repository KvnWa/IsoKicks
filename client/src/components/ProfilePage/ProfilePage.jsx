import './ProfilePage.css';
import React, { useState, useEffect } from 'react'
import { Route, Switch } from "react-router-dom";
import axios from 'axios';

 function ProfilePage({signedIn,handleLogOut}){
    document.title = 'Kicks - Profile'
    return(
        <>
            <div className='profile-nav'>
                <a className="nav-link" href="/">Name</a>
                <a className="nav-link l2" href="/all-drinks">All Drinks</a>
                <a className="nav-link l3" href="/search-results">Search Results</a>
                <a className="nav-link l5" href="/Mix">Mixing</a>
                <a className="nav-link l4" href="/favorites"><b><span>Fav</span>orite<span>s</span></b></a>
                <button className="profile-logOut" onClick={handleLogOut}>Log Out</button>
            </div>
        </>
    )
}

export default ProfilePage