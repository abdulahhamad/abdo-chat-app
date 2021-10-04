import { useContext } from "react";
import { UserContext } from "../context/login";

export default function useLogin(){
  const {user,first,last,userList,setUserList,login,logout,selectedUser,setSelectedUser,selectUser,theme,setTheme,sendMessage,setSendMessage,newSelectedUser}=useContext(UserContext);
  return  {user,first,last,userList,setUserList,login,logout,selectedUser,setSelectedUser,selectUser,theme,setTheme,sendMessage,setSendMessage,newSelectedUser};
}