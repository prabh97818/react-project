import React, { useEffect, useState }  from "react";
import { CurrentUser } from "../services/myrequests";

const Profile = (props) => {

  const currentUserdata = {
    username: "",
    email: "",
    first_name: "",
    last_name: "",
  };
  const [userdata, setUserdata] = useState(currentUserdata);

  useEffect(() => {
      CurrentUser().then((resp) => {
        if (resp) {
          setUserdata(resp);
        } else {
          localStorage.removeItem("token");
        }
      });
    
  }, []);


    const UserData = userdata
    return (
      <div className="row">
        <div className="col-5 ml-auto mr-auto p-5 my-4" style={{background: "whitesmoke", display: "inline-grid"}}>
          
            <div className="text-center">
              <h2>Profile</h2>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1 " className="lead">  Name: { UserData.first_name} { UserData.last_name}</label>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1 " className="lead">Username: { UserData.username}</label>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1 " className="lead">email: { UserData.email}</label>
            </div>
          </div>
        </div>
      
    );
  }


export default Profile;
