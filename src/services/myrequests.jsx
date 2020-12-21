import React from "react";

import API from "./api";

// const config = {
//   headers: { Authorization: `JWT ${localStorage.getItem("token")}` },
// };

const CurrentUser = () => {
  let mydata = API.get(`api/current_user/`, {
    headers: { Authorization: `JWT ${localStorage.getItem("token")}` },
  })
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
  return mydata;
};

const LoginUser = (data) => {
  let newdata = API.post(`token-auth/`, data)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
      localStorage.removeItem("token");
    });
  return newdata;
};

const SignupUser = (data) => {
  let newdata = API.post(`/api/users/`, data)
    .then((res) => res.data)
    .catch((err) => console.log(err));

  return newdata;
};

const VerifyThis = (param) => {
  let mydata = API.get(`api/approve-account/${param}`)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
  return mydata;
};


const UserTasks = () => {
  let mydata = API.get(`task/`, {
    headers: { Authorization: `JWT ${localStorage.getItem("token")}` },
  })
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
  return mydata;
};

const NewTasks = (data) => {
  let mydata = API.post(`task/`, data, {
    headers: { Authorization: `JWT ${localStorage.getItem("token")}` },
  })
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
  return mydata;
};

const DeleteTasks = (param) => {
  let mydata = API.delete(`task/?${param}`, {
    headers: { Authorization: `JWT ${localStorage.getItem("token")}` },
  })
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
  return mydata;
};


const AllUserDetail = () => {
  let mydata = API.get(`api/all-user`, {
    headers: { Authorization: `JWT ${localStorage.getItem("token")}` },
  })
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
  return mydata;
};

const DeleteUser = (param) => {
  let mydata = API.delete(`api/all-user?${param}`, {
    headers: { Authorization: `JWT ${localStorage.getItem("token")}` },
  })
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
  return mydata;
};

export { CurrentUser, LoginUser, SignupUser, UserTasks, NewTasks, DeleteTasks, VerifyThis, AllUserDetail, DeleteUser };

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
