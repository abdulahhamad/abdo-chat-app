import { useState } from 'react'
import {Redirect, useLocation} from "react-router-dom";
import useLogin from '../hooks/useLogin';

function Login() {
  const {user,login,theme}=useLogin();
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const {pathname}=useLocation();

  if(user && pathname==="/login" ) return <Redirect to="/chat" />

  return (
    <div className={`login-wrapper ${theme==="dark"&&"login-wrapper-dark"}`}>
      <p className={`${theme==="dark"&&"p-dark"}`} >Log in to your account</p>
      <div className="txt">
        <input type="text" className={`input-txt ${theme==="dark"&&"input-txt-dark"}`} placeholder="User Name" onChange={(e) => {
          setUsername(e.target.value);
        }} />
      </div>
      
      <div className="txt">
        <input type="text" className={`input-txt ${theme==="dark"&&"input-txt-dark"}`} placeholder="First Name" onChange={(e) => {
          setFirstname(e.target.value);
        }} />
      </div>
      
      <div className="txt">
        <input type="text" className={`input-txt ${theme==="dark"&&"input-txt-dark"}`} placeholder="Last Name" onChange={(e) => {
          setLastname(e.target.value);
        }} />
      </div>
      <div className="login-button">
        <button onClick={() => {
          login(username);
        }}>LOGIN</button>
      </div>
    </div>
  )
}

export default Login;
