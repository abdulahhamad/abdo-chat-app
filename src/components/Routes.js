import React from 'react'
import { BrowserRouter as Router, Link, Switch, Route, useRouteMatch ,HashRouter,Redirect} from "react-router-dom";
import useLogin from "../hooks/useLogin";
import Login from "../pages/Login";
import Chat from "../pages/Chat/Chat";
import UserInfo from '../pages/Chat/UserInfo';
import SearchInput from '../pages/Chat/components/SearchInput';
import UserList from '../pages/Chat/components/UserList';
import Settings from '../pages/Chat/components/Settings';

function Routes() {
  const { user, theme } = useLogin();

  return (
    <HashRouter>
      <Redirect to="/login"/>
      
      <Switch>
        <Route path="/chat/:id">
          <div className={`chat-container ${theme}`}>
            <div className="left-side">
              <SearchInput />
              <UserList />
              <Settings />
            </div>
            <div className="right-side">
              <UserInfo />
            </div>
          </div>
        </Route>
        <Route path="/chat">
          <Chat />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        

      </Switch>
    </HashRouter>
  )
}

export default Routes;
