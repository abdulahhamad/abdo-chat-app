import React from 'react'
import useLogin from '../../../hooks/useLogin';
import { BrowserRouter as Router,Link,Switch,Route,useRouteMatch,NavLink} from 'react-router-dom';
import UserInfo from '../UserInfo';
import {FiMoreHorizontal} from "react-icons/fi"

export default function UserHeader() { 
  const {selectedUser,theme}=useLogin();
  const {path,url}=useRouteMatch();

  if(!selectedUser) return null;
  return <>   
  <div className="user-header">

    <div className="header-name">
      <div className="user-header__user-img">   </div>
    {`${selectedUser.first_name} ${selectedUser.last_name}`}</div> 
    <NavLink to={`${url}/${selectedUser.username}`}><FiMoreHorizontal className={`info-icon ${theme==="dark"&&"info-icon-dark"}`}/></NavLink>
  </div>
  <Switch>
    <Route path="/chat/:id">
      <UserInfo />
    </Route>
  </Switch>
   </> 
}
