import React from 'react'
import useLogin from '../../../hooks/useLogin';


export default function UserList({search=""}) {
  let {userList,selectUser,theme}=useLogin();
  console.log(userList);
   const filtered=userList.filter((u)=>u.first_name.toLowerCase().includes(search.toLowerCase()));
  
  return (
    <div className="user-list">
      {
        filtered.map((item)=>{
          return (
            <div key={item.id} className={`user-list__user ${theme==="dark"&&"user-list__user-dark"}`} onClick={()=>selectUser(item.id)}> 
            <div className="user-list__user-img">   </div>

            <div className="user-list__right">
              <div className="user-list__name">{`${item.first_name} ${item.last_name}`}</div>
              <div className="user-list__message">{item.messages[item.messages.length-1].text}</div>
            </div>
            </div>
          );
        })
      }
    </div>
  );
}
