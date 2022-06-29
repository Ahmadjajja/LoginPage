import React from "react";
import "../SignUp-page/SignUp-page.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { doc, setDoc, serverTimestamp } from "firebase/firestore/lite"     //Confusion here
import { createUserWithEmailAndPassword  } from "firebase/auth"
import { useState } from 'react'
import { firestore, auth } from '../config/firebase.js';

 
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fauser } from '@fortawesome/free-solid-svg-icons'
{/* <FontAwesomeIcon icon={fa-solid fa-envelope} /> */ }

 




function SignUpPage() {    
        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");

        const registerUser = (e) => {
            e.preventDefault()

            // console.log(e.target.input[0])
            console.log(email)
            console.log(password)

            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user)

                    setDoc(doc(firestore, "users", user.uid), { email, dateCreated: serverTimestamp(), uid: user.uid, name });   //confusion here
                    toast.success('User has been registered!', {
                        position: "bottom-left",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                })
                .catch((error) => {
                    // const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(error)
                    toast.error(errorMessage, {
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
        <div className="row" id="loginWholePage" style={{ width: "100%", }}>
            <div className="col-2 col-sm-3 col-lg-4 sideSection"></div>
            <div className="col-8 col-sm-6 col-lg-4 loginSection ">
                <h3 style={{ margin: 30, }}>SignUp</h3>
                <form onSubmit={registerUser}>
                    {/* <input type="text" /> <br /> */}
                    <label for="user" className="text-secondary" style={{ fontSize: 14, marginLeft: 12, }}>UserName</label><br />
                    <span><span className="icon"><FontAwesomeIcon icon={faUser} /></span><input type="text" className="user" id="user" name="userName" placeholder="type your userName" onChange={e => { setName(e.target.value) }}/></span><br />
                    <label for="email" className="text-start text-secondary" style={{ fontSize: 14, marginRight: 134, }}>email</label><br />
                    <span><span className="icon"><FontAwesomeIcon icon={faEnvelope} /></span><input type="email" className="infoFields" id="email" name="email" placeholder="type your email" onChange={e => { setEmail(e.target.value) }} /></span><br />
                    <label for="password" className="text-secondary" style={{ fontSize: 14, }} >password</label><br />
                    <span><span className="icon"><FontAwesomeIcon icon={faLock} /></span><input type="password" placeholder='type your password' name='password' className='infoFields' onChange={e => { setPassword(e.target.value) }} /></span><br />
                    {/* <a style={{marginLeft:69,fontSize:14,textDecoration:'none',color:"black"}} href="#">Forgot password?</a><br /><br/> */}
                    <input type="submit" className="login-btn" style={{ marginTop: 40, }} value="SignUp" id="button" />
                </form>
                {/* <br />
              <p class="fs-6 text-secondary" style={{fontSize:14,}}>Or Sign Up Using</p>
              <a  href="#" className="facebook"><FaFacebookF /></a>
              <a href="#" className="twitter"><FaTwitterSquare /></a>
              <a href="#" className="google"><FaGoogle /></a>
              <br /><br /><br /><br />
              <p  style={{fontSize:14,}} class="fs-6 text-secondary">Or Sign Up Using</p>
              <a href="#"style={{fontSize:14,textDecoration:'none',color:"black"}} class="fs-6 ">Sign Up</a>
              <FontAwesomeIcon icon={faRocket} />
            </div>
            <div className="col-2 col-sm-3 col-lg-4 sideSection"></div> */}
            </div>
        </div>
    )
}
export default SignUpPage;