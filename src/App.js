// import logo from './logo.svg';
import "./App.css";
import React from "react";
import Auth from "./components/auth";
import Profile from "./components/profile";
import AllUser from "./components/allUser";
import EditUser from "./components/editUser";
import Protected from "./components/protected";
import Public from "./components/public";
import VerifyeAccount from "./components/VerifyeAccount";
import AddTask from "./components/tasks/addtask";
import AllTask from "./components/tasks/allTask";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/verifyAccount/:token" component={VerifyeAccount} />
          
          <Route path="/auth">
            <Public cmp={Auth} />
          </Route>
          <Route path="/add-task">
            <Protected cmp={AddTask} />
          </Route>
          <Route path="/task">
            <Protected cmp={AllTask} />
          </Route>
          <Route path="/allUser">
            <Protected cmp={AllUser} />
          </Route>
          <Route path="/editUser/:username" >
            <Protected cmp={EditUser} />
          </Route>
          <Route exact path="/">
            <Protected cmp={Profile} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
