import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/Login-page/login-page";
import SignUpPage from "./components/SignUp-page/SignUp-page";
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LoginPage/>}/>
        <Route  path='/signup' element={<SignUpPage/>}/>
      </Routes>
      <ToastContainer />
    </div>
  );
}
export default App;
