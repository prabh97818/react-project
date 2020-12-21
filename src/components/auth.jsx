import React, { useCallback, useState } from "react";
import FormInput from "./reusables/formInputs";
import FormButton from "./reusables/formButtons";
import { LoginUser, SignupUser } from "../services/myrequests";
import { Redirect } from "react-router-dom";

const Auth = (props) => {
  const initState = {
    isRegister: false,
  };
  const stst = {
    value:false
  }
  const [loggedin, setLoggedIn] = useState(stst);
  const [regData, setRegdata] = useState(initState);
  const [user, setUserInput] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    
    setUserInput({ ...user, [name]: value });


  };

  const onChangeRegister = () => {
    setRegdata({ isRegister: true });
    // this.setState({ isRegister: true });
  };

  const onChangeLogin = () => {
    setRegdata({ isRegister: false });

    // this.setState({ isRegister: false });
  };
  
  const handleLoginClick = useCallback(() => {
    LoginUser(user).then((resp) => {
      if (resp) {
        localStorage.setItem("token", resp.token);
        setLoggedIn({value:true})
      } else {
        alert("Email or Pasword is incorrect");
      } 
    });
  }, [user,]);

  const handleSignupClick = useCallback(() => {
    SignupUser(user).then((resp) => {
      if (resp.success) {
        alert("An activation link is sent to you on your email id. Plese check your email now! ")
      } else {
        alert("An Error occured, we couldn't create your account");
      }
    });
  }, [user,]);

  return (
    <div className="container">
      {
        loggedin.value ? <Redirect to="/"></Redirect> : null 
      }
      <div className="col-md-4 ml-auto mr-auto ">
        <div
          className="contaier-fluid ml-auto mr-auto px-5 py-5 mt-5"
          style={{ background: "whitesmoke" }}
        >
          {!regData.isRegister ? (
            <div>
              <div className="text-center">
                <h2>Login</h2>
              </div>
              <div className="row ml-auto mr-auto">
                <div className="ml-auto mr-auto">
                  <FormInput
                    label="Username"
                    name="username"
                    type="text"
                    onChange={handleChange}
                    placeholder="username"
                  />
                  <FormInput
                    label="password"
                    name="password"
                    type="password"
                    onChange={handleChange}
                    placeholder="Password"
                  />
                  <FormButton
                    type="submit"
                    label="Login"
                    className="btn btn-primary mt-2 btn-block"
                    handleClick={handleLoginClick}
                  />
                  <FormButton
                    label="Register"
                    className="btn btn-warning mt-2 btn-block"
                    handleClick={onChangeRegister}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="text-center">
                <h2>Register</h2>
              </div>
              <div className="row ml-auto mr-auto">
                <div className="ml-auto mr-auto">
                  <FormInput
                    label="Username"
                    name="username"
                    type="text"
                    onChange={handleChange}
                    placeholder="username"
                  />

                  <FormInput
                    label="Email"
                    name="email"
                    type="email"
                    onChange={handleChange}
                    placeholder="Email Address"
                  />
                  <FormInput
                    label="password"
                    name="password"
                    type="password"
                    onChange={handleChange}
                    placeholder="Password"
                  />
                  <FormInput
                    label="Confirm Password"
                    name="confirm_password"
                    type="password"
                    onChange={handleChange}
                    placeholder="Confirm Password"
                  />
                  <FormButton
                    type="submit"
                    label="Register"
                    className="btn btn-primary mt-2 btn-block"
                    handleClick={handleSignupClick}
                  />

                  <FormButton
                    label="Login"
                    className="btn btn-warning mt-2 btn-block"
                    handleClick={onChangeLogin}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
