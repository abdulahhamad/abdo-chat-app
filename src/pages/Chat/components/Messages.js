import React, { useEffect, useState } from 'react'
import useLogin from '../../../hooks/useLogin';

export default function Messages() {
  const {selectedUser,theme}=useLogin();
  return (
    <>
    <div className={`messages ${theme==="dark"&&"messages-dark"}`}>
      {
        selectedUser ? selectedUser.messages.map((message)=>{
         return message.sender==="ben"? 
           <div className="right-message">{message.text}</div> :
           <div className={`left-message ${theme==="dark"&&"dark-left-message"}`}>{message.text}</div> ;
        })
        : <div className="select-friend">Select a friend to see Chat</div>
      }
    </div>
      </>
  );
}
