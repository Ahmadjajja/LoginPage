import React from "react";
import "../Login-page/login-page.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaTwitterSquare, FaGoogle } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState, useEffect } from 'react';
import { firestore, auth } from '../config/firebase.js';
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";


function LoginPage() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({})

  useEffect(() => {
    // setUser(auth.currentUser)
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // const uid = user.uid;
        console.log(user)
        setUser(user)
        // ...
      } else {
        console.log("user is not signed in")
        setUser({})
        // User is signed out
        // ...
      }
    });
  }, [])
  const signOutHandler = () => {
    // const auth = getAuth();
    signOut(auth).then(() => {
        // Sign-out successful.
      toast.success('User has been logged Out!', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }).catch((error) => {
      // An error happened.
      console.log(error)
      toast.error(error.message, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });
  }


  const loginUser = (e) => {
    e.preventDefault()

    console.log(loginEmail)
    console.log(loginPassword)

    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        toast.success('User has been logged in!', {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });


        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;

        console.log(error)
        toast.error(error.message, {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  }

  return (
    // <div class="container-fluid"> 
    <main>
      {user.email
        ?
        <div className="d-flex justify-content-center align-items-center" id="loginWholePage" style={{ width: "100%", }}>
          <div className="row">
            <div className="col text-center ">
              <h2 className="text-white">User Email: {user.email}</h2>
              <h2 className="text-white">User UID: {user.uid}</h2>
              <button className="btn btn-danger" onClick={signOutHandler}>Logout</button>
            </div>
          </div>
        </div>
        : <div className="row" id="loginWholePage" style={{ width: "100%", }}>
          <div className="col-2 col-sm-3 col-lg-4 sideSection"></div>
          <div className="col-8 col-sm-6 col-lg-4 loginSection ">
            <h3 style={{ margin: 30, }}>Login</h3>
            <form onSubmit={loginUser}>
              {/* <input type="text" /> <br /> */}
              <label for="email" className="text-start text-secondary" style={{ fontSize: 14, marginRight: 134, }}>email</label><br />
              <span><span className="icon"><FontAwesomeIcon icon={faEnvelope} /></span><input type="email" className="infoFields" id="email" name="email" placeholder="type your email" onChange={e => { setLoginEmail(e.target.value) }} /></span><br />
              <label for="password" className="text-secondary" style={{ fontSize: 14, }}>password</label><br />
              <span><span className="icon"><FontAwesomeIcon icon={faLock} /></span><input type="password" placeholder='type your password' name='SecurtyKey' className='infoFields' onChange={e => { setLoginPassword(e.target.value) }} /></span><br />
              <a style={{ marginLeft: 69, fontSize: 14, textDecoration: 'none', color: "black" }} href="#">Forgot password?</a><br /><br />
              <input type="submit" className="login-btn" value="Login" id="button" />
            </form>
            <br />
            <p class="fs-6 text-secondary" style={{ fontSize: 14, }}>Or Sign Up Using</p>
            {/* <button><FaFacebookF /></button>
          <button><FaFacebookF /></button>
          <button><FaGoogle /></button> */}
            <a href="#" className="facebook"><FaFacebookF /></a>
            <a href="#" className="twitter"><FaTwitterSquare /></a>
            <a href="#" className="google"><FaGoogle /></a>
            <br /><br /><br /><br />
            <p style={{ fontSize: 14, }} class="fs-6 text-secondary">Or Sign Up Using</p>

            <NavLink to='/signup' style={{ fontSize: 14, textDecoration: 'none', color: "black" }} class="fs-6 ">Sign Up</NavLink>
            {/* <Route path="p" component={SignUpPage} /> */}
            {/* <FontAwesomeIcon icon={faRocket} /> */}
          </div>
          <div className="col-2 col-sm-3 col-lg-4 sideSection"></div>
        </div>
      }

    </main >
  );
}
export default LoginPage;