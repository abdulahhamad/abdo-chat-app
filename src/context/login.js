import React from "react";

export const UserContext=React.createContext({
  user:null,
  first:null,
  last:null,
  login:()=>{},
  logout:()=>{},
  userList:[],
  setUserList:()=>{},
  selectedUser:null,
  setSelectedUser:()=>{},
  selectUser:()=>{},
  theme:"light",
  setTheme:()=>{},
  sendMessage:null,
  setSendMessage:()=>{},
  newSelectedUser:()=>{}
})