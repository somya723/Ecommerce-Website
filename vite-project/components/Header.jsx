import logo from '../assets/logo.avif';
import cart from '../assets/cart.png';
import { Link } from "react-router-dom";
import { useNavigate, useResolvedPath } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { onAuthStateChanged, getAuth, signOut } from 'firebase/auth'
import {auth} from '../src/firebase/firebaseConfig'
import { getDoc, setDoc } from "firebase/firestore"
import {
  doc,
} from "firebase/firestore";

import { db } from "../src/firebase/firebaseConfig";

function Header() {
const logOutUser = () => {
    const auth = getAuth();
    signOut(auth).then(() => {  
        navigate("/")
    }) 
    }
  return (
    <div className="header">
        <div className="top-header">
            <div className="logo"> 
                <img src={logo} alt="logo"/>
            </div>
            
            <div className="cart-options">
                <img src={cart} alt="cart"/>
                <button className="black-button"><Link className='button-link' to="/SignUp">Login or Sign Up</Link></button>
                <button className='login-signup' onClick={logOutUser}>LogOut</button>
            </div>
        </div>
        <div className="menu">
            <nav>
                <ul>
                    <li>
                        <Link className="header-link" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="header-link" to="/shop">Shop</Link>
                    </li>
                    <li>
                        <Link className="header-link" to="/blog">Blogs</Link>
                    </li>
                    <li>
                        <Link className="header-link" to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Header;
