// import logo from './logo.svg';
import "./App.css";
import React, { Component, useEffect } from "react";
import Auth from "./components/auth";
import Navbar from "./components/navbar";
import Profile from "./components/profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CurrentUser, LoginUser, SignupUser } from "./services/myrequests";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged_in: localStorage.getItem("token") ? true : false,
    };
  }

  // componentDidMount() {
  //   if (this.state.logged_in) {
  //     fetch("http://localhost:8000/api/current_user/", {
  //       headers: {
  //         Authorization: `JWT ${localStorage.getItem("token")}`,
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((json) => {
  //         this.setState({});
  //       });
  //   }
  // }

  // Similar to componentDidMount and componentDidUpdate:
  // useEffect(() => { moveMap(position) }, [position]);


  componentDidMount() {
    if (this.state.logged_in) {
      const resp = CurrentUser();
      if (resp) {
        this.setState({ resp });
        console.log("Hello", this.state);
      }
    }
  }



  handle_login = async (data) => {
    const resp = await LoginUser(data);
    console.log(resp)
      if (resp.token) {
        localStorage.setItem("token", resp.token);
        this.setState({
          logged_in: true,
        });
      } else {
        this.setState({
          logged_in: false,
        });
      }
    
  };

  handle_logout = () => {
    localStorage.removeItem("token");
    this.setState({ logged_in: false });
  };

  handle_signup = async (data) => {
    const resp = await SignupUser(data);
    console.log(resp)
      if (resp.token) {
        localStorage.setItem("token", resp.token);
        this.setState({
          logged_in: true,
        });
      } else {
        this.setState({
          logged_in: false,
        });
      }
    
  };


  // handle_signup = (e, data) => {
  //   e.preventDefault();
  //   fetch("http://localhost:8000/api/users/", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: data,
  //   })
  //     .then((res) => res.json())
  //     .then((json) => {
  //       localStorage.setItem("token", json.token);
  //       this.setState({
  //         logged_in: true,
  //       });
  //     });
  // };

  render() {
    return (
      <div className="App">
        <Router>
          <Navbar
            logout={this.handle_logout}
            logged_in={this.state.logged_in}
          />
          <Switch>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/auth">
              <Auth
                LoginHandle={(data) => this.handle_login(data)}
                handleSignup={(data) => this.handle_signup(data)}
              />
            </Route>
            <Route path="/">
              <Profile />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
