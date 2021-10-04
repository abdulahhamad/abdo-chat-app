import React from 'react'
import useLogin from '../../../hooks/useLogin'
import { FaMoon } from 'react-icons/fa';
import { BiLogOut } from "react-icons/bi";

export default function Settings() {
  const {theme,setTheme,logout}=useLogin();

  const changeTheme=()=>{
    setTheme(theme=="light"?"dark":"light");
  }
  return (
    <div className="settings">
      <button className={`btn ${theme==="dark"&&"btn-dark"}`} onClick={changeTheme}><FaMoon className="icon" /></button>
      <button className={`btn ${theme==="dark"&&"btn-dark"}`} onClick={logout}><BiLogOut className="icon" /></button>
    </div>
  )
}
