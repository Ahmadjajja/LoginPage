import React from "react";
import "../Login-page/login-page.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import  {FaFacebookF , FaTwitterSquare , FaGoogle}  from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUser,faLock  } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fauser } from '@fortawesome/free-solid-svg-icons'

function LoginPage() {
  return (
      // <div class="container-fluid">
        <div className="row" id="loginWholePage" style={{width:"100%",}}>
            <div className="col-2 col-sm-3 col-lg-4 sideSection"></div>
            <div className="col-8 col-sm-6 col-lg-4 loginSection ">
              <h3 style={{margin:30,}}>Login</h3>
              <form>
                {/* <input type="text" /> <br /> */}
                <label for="userName" className="text-start text-secondary" style={{fontSize:14,}}>username</label><br />
                <span><span className="icon"><FontAwesomeIcon icon={ faUser}/></span><input  type="text" className="infoFields" id="userName" name="userName" placeholder="type your username"/></span><br />
                <label for="password" className="text-secondary" style={{fontSize:14,}}>password</label><br />
                <span><span className="icon"><FontAwesomeIcon icon={ faLock}/></span><input type="password" className="infoFields" id="password" name="password" placeholder="type your password"/></span><br />
                <a style={{marginLeft:69,fontSize:14,textDecoration:'none',color:"black"}} href="#">Forgot password?</a><br /><br/>
                <input type="submit" className="login-btn" value="Login" id="button" />
              </form>
              <br />
              <p class="fs-6 text-secondary" style={{fontSize:14,}}>Or Sign Up Using</p>
              {/* <button><FaFacebookF /></button>
              <button><FaFacebookF /></button>
              <button><FaGoogle /></button> */}
              <a  href="#" className="facebook"><FaFacebookF /></a>
              <a href="#" className="twitter"><FaTwitterSquare /></a>
              <a href="#" className="google"><FaGoogle /></a>
              <br /><br /><br /><br />
              <p  style={{fontSize:14,}} class="fs-6 text-secondary">Or Sign Up Using</p>
              <a href="#"style={{fontSize:14,textDecoration:'none',color:"black"}} class="fs-6 ">Sign Up</a>
              {/* <FontAwesomeIcon icon={faRocket} /> */}
            </div>
            <div className="col-2 col-sm-3 col-lg-4 sideSection"></div>
        </div>
      // </div>
  );
}
export default LoginPage;