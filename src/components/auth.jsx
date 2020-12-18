import React, { useCallback, useState } from "react";
import FormInput from "./reusables/formInputs";
import FormButton from "./reusables/formButtons";

const Auth = (props) => {
  const initState = {
    isRegister: false,
  };
  const [regData, setRegdata] = useState(initState);
  const [user, setUserInput] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    
    setUserInput({ ...user, [name]: value });

    // const { user } = this.state;
    // user[name] = value;
    // this.setState({ user });
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
    props.LoginHandle(user) 
  }, [user,]);

  const handleSignupClick = useCallback(() => {
    props.handleSignup(user) 
  }, [user,]);

  return (
    <div className="container">
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
