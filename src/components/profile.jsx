import React from "react";

const Profile = (props) => {

    const { UserData} = props
    return (
      <div className="container">
        <div className="col-md-4 ml-auto mr-auto ">
          <div
            className="contaier-fluid ml-auto mr-auto p-5 mt-5"
            style={{background: "whitesmoke",}}
          >
            <div className="text-center">
              <h2>Profile</h2>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1 " className="lead">  Name: { UserData.first_name} { UserData.last_name}</label>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1 " className="lead">Username: { UserData.username}</label>
            </div>
            <div className="form-group pb-3 ">
              <label htmlFor="exampleInputEmail1 " className="lead">email: { UserData.email}</label>
            </div>
            <button className="btn btn-primary mt-2 btn-block">Edit Profile</button>
            <button className="btn btn-primary mt-2 btn-block">Change Password</button>
          </div>
        </div>
      </div>
    );
  }


export default Profile;
