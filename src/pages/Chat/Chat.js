import React, { useState } from 'react';
import { Redirect } from 'react-router';
import useLogin from '../../hooks/useLogin';
import './Chat.css'
import MessageInput from './components/MessageInput';
import Messages from './components/Messages';
import SearchInput from './components/SearchInput';
import Settings from './components/Settings';
import UserHeader from './components/UserHeader';
import UserList from './components/UserList';

function Chat() {
  const [search,setSearch]=useState();
  const {theme,user}=useLogin();
  if (!user) return <Redirect to="/login"/>
  


  return (
    <div className={`chat-container ${theme}`}>
      <div className="left-side">
        <SearchInput search={search} setSearch={setSearch}/>
        <UserList search={search} setSearch={setSearch}/>
        <Settings />
      </div>
      <div className="right-side">
        <UserHeader />
        <Messages />
        <MessageInput />
      </div>
    </div>
  )
}

export default Chat;
