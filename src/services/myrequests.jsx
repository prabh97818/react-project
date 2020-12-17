import React from "react";

import API from "./api";

const config = {
  headers: { Authorization: `JWT ${localStorage.getItem("token")}` },
};



const CurrentUser = () => {
  console.log("token: ", localStorage.getItem("token"))
  let mydata = API.get(`api/current_user/`, config)
    .then((res) => res.data)
    .catch((err) => {console.log(err); });
  return mydata ;
};


const LoginUser = (data) => {
  let newdata = API.post(`token-auth/`, data)
    .then((res) => res.data)
    .catch((err) => {console.log(err); localStorage.removeItem("token");});
  return newdata;
};

const SignupUser = (data) => {
  let newdata = API.post(`/api/users/`, data)
    .then((res) => res.data)
    .catch((err) => console.log(err));

  return newdata;
};

export { CurrentUser, LoginUser, SignupUser };

// export default CurrentUser;

// fetch("http://localhost:8000/", {
//     headers: {
//       Authorization: `JWT ${localStorage.getItem("token")}`,
//     },
//   })
//     .then((res) => res.json())
//     .then((json) => {
//       this.setState({});
//     });
