import React from 'react'
import {Link,Switch,Route} from "react-router-dom";
import useLogin from './../../hooks/useLogin';
import {GrClose} from "react-icons/gr";
import {BiMessageRounded} from "react-icons/bi";
import {IoIosCall} from "react-icons/io";
import {BsCameraVideo} from "react-icons/bs";

function UserInfo() {
  const {selectedUser,theme}=useLogin();
  if(!selectedUser) return null;
  return (
    <>
    <div className="user-info">
      <div className={`close-button`}><Link to="/chat"><GrClose className={`close-button-icon ${theme==="dark"&&"close-button-icon-dark"}`}/></Link></div>
      <div className="user-info__user">
        <div className="user-info__user-img"></div>
        <div className="user-info__user-name">{`${selectedUser.first_name} ${selectedUser.last_name}`}</div>
        <p>Last Seen 2 Hours Ago!</p>
      </div>
      <div className="attributes">
        <div className={`attributes-message ${theme==="dark"&&"attributes-messages-dark"}`}>
          <BiMessageRounded className="attributes-message-icon" />
          <p>Message</p>
        </div>
        <div className={`attributes-call ${theme==="dark"&&"attributes-call-dark"}`}>
          <IoIosCall className="attributes-call-icon"/>
          <p>Call</p>
        </div>
        <div className={`attributes-video ${theme==="dark"&&"attributes-video-dark"}`}>
          <BsCameraVideo className="attributes-video-icon" />
          <p>Video</p>
        </div>
      </div>
    </div>
  </>
  )
}

export default UserInfo;
