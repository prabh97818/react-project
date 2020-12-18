import React from "react";

const Profile = (props) => {

    const { UserData} = props
    return (
      <div className="row">
        <div className="col-3 ml-auto mr-auto p-5 my-4" style={{background: "whitesmoke",}}>
          
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
          </div>
        </div>
      
    );
  }


export default Profile;
