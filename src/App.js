import "./App.css"
import { useState, useEffect } from "react";
import Routes from "./components/Routes"
import { UserContext } from "./context/login"
import mockUsers from "./mock-users.json";

function App() {
  const [user, setUser] = useState(null);
  const [first, setFirst] = useState(null);
  const [last, setLast] = useState(null);
  const [selectedUser, setSelectedUser] = useState();
  const [userList, setUserList] = useState(mockUsers.users);
  const [theme, setTheme] = useState("light");
  const [sendMessage, setSendMessage] = useState(null);

  const selectUser = (userId) => {
    const user = userList.find((user) => user.id === userId);
    setSelectedUser(user);
  }
  const login = (username) => {
    const user = { username };
    setUser(user);
    localStorage.setItem("username", JSON.stringify(user));
  }

  const logout = () => {
    setUser(null);
    localStorage.removeItem("username");
  }

  useEffect(() => {
    const userFromStorage = localStorage.getItem("username");
    if (userFromStorage) {
      const userObject = JSON.parse(userFromStorage);
      setUser(userObject);
    }
  }, [])
  const newSelectedUser = (messageText) => {
    
    setSelectedUser({
      ...selectedUser,
      messages: [
        ...selectedUser.messages,
        {
          id: Math.random(),
          text: messageText,
          sender: "ben"
        }
      ]
    })
    const newUserList = userList.map((u) => {
      if (u.id === selectedUser.id)
        return selectedUser
      else return u
    })
    setUserList(newUserList)
  }
  return (
    <div className={`main-container ${theme==="dark"&&"main-container-dark"}`}>
    <UserContext.Provider
      value={{
        user,
        first,
        last,
        login,
        logout,
        userList,
        setUserList,
        selectUser,
        selectedUser,
        setSelectedUser,
        theme,
        setTheme,
        sendMessage,
        setSendMessage,
        newSelectedUser,
      }}
    >
      <Routes />
    </UserContext.Provider>
    </div>
  );
}

export default App;
