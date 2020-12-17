// import logo from './logo.svg';
import "./App.css";
import React, { useEffect, useState } from "react";
import Auth from "./components/auth";
import Navbar from "./components/navbar";
import Profile from "./components/profile";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { CurrentUser, LoginUser, SignupUser } from "./services/myrequests";

const App = () => {
  const initialState = {
    logged_in: localStorage.getItem("token") ? true : false,
  };

  const currentUserdata = {
    username: "",
    email: "",
    first_name: "",
    last_name: "",
  };
  const [authdata, setAuthdata] = useState(initialState);
  const [userdata, setUserdata] = useState(currentUserdata);

  useEffect(() => {
    if (authdata.logged_in) {
      CurrentUser().then((resp) => {
        if (resp) {
          setUserdata(resp);
          console.log(resp);
        }
        // else {
        //   setAuthdata({
        //     logged_in: false,
        //     localStorage.removeItem("token");
        //   });
        // }
      });
    }
  }, [authdata]);

  const handle_login = (data) => {
    LoginUser(data).then((resp) => {
      if (resp) {
        localStorage.setItem("token", resp.token);
        setAuthdata({
          logged_in: true,
        });
      } else {
        setAuthdata({
          logged_in: false,
        });
      }
    });
  };

  const handle_logout = () => {
    localStorage.removeItem("token");
    setAuthdata({
      logged_in: false,
    });
  };

  const handle_signup = async (data) => {
    const resp = await SignupUser(data);
    console.log(resp);
    if (resp.token) {
      localStorage.setItem("token", resp.token);
      this.setState({
        logged_in: true,
      });
    } else {
      setAuthdata({
        logged_in: false,
      });
    }
  };

  return (
    <div className="App">
      <Router>
        <Navbar logout={handle_logout} logged_in={authdata.logged_in} />
        <Switch>
          <Route path="/auth">
            {authdata.logged_in ? (
              <Redirect to="profile"></Redirect>
            ) : (
              <Auth
                LoginHandle={(data) => handle_login(data)}
                handleSignup={(data) => handle_signup(data)}
              />
            )}
          </Route>
          <Route path="/profile">
          {!authdata.logged_in ? (
              <Redirect to="auth"></Redirect>
            ) : (
            <Profile UserData={userdata} />)}
          </Route>
          <Route path="/">
          <Redirect to="profile"></Redirect>
            {/* <Profile /> */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
