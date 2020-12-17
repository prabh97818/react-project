import React, { useCallback, Component } from "react";
import FormInput from "./reusables/formInputs";
import FormButton from "./reusables/formButtons";

class Auth extends Component {
  state = {
    isRegister: false,
    user: {},
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    const { user } = this.state;
    user[name] = value;
    this.setState({ user });
  };

  onChangeRegister = () => {
    this.setState({ isRegister: true });
  };

  onChangeLogin = () => {
    this.setState({ isRegister: false });
  };

  render() {
    return (
      <div className="container">
        <div className="col-md-4 ml-auto mr-auto ">
          <div
            className="contaier-fluid ml-auto mr-auto px-5 py-5 mt-5"
            style={{ background: "whitesmoke" }}
          >
            {!this.state.isRegister ? (
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
                      onChange={this.handleChange}
                      placeholder="username"
                    />
                    <FormInput
                      label="password"
                      name="password"
                      type="password"
                      onChange={this.handleChange}
                      placeholder="Password"
                    />
                    <FormButton
                      type="submit"
                      label="Login"
                      className="btn btn-primary mt-2 btn-block"
                      handleClick={() =>
                        this.props.LoginHandle(this.state.user)
                      }
                    />
                    <FormButton
                      label="Register"
                      className="btn btn-warning mt-2 btn-block"
                      handleClick={this.onChangeRegister}
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
                        onChange={this.handleChange}
                        placeholder="username"
                      />

                      <FormInput
                        label="Email"
                        name="email"
                        type="email"
                        onChange={this.handleChange}
                        placeholder="Email Address"
                      />
                      <FormInput
                        label="password"
                        name="password"
                        type="password"
                        onChange={this.handleChange}
                        placeholder="Password"
                      />
                      <FormInput
                        label="Confirm Password"
                        name="confirm_password"
                        type="password"
                        onChange={this.handleChange}
                        placeholder="Confirm Password"
                      />
                      <FormButton
                        type="submit"
                        label="Register"
                        className="btn btn-primary mt-2 btn-block"
                        handleClick={() =>
                          this.props.handleSignup(
                            this.state.user
                          )
                        }
                      />
                    
                    <FormButton
                      label="Login"
                      className="btn btn-warning mt-2 btn-block"
                      handleClick={this.onChangeLogin}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Auth;
