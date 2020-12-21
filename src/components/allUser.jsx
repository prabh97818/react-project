import React, { Component } from "react";
import { AllUserDetail, DeleteUser } from "../services/myrequests";

class AllUser extends Component {
  state = {
    allUser: {},
  };

  updateUserList = () => {
    AllUserDetail().then((resp) => {
      if (resp) {
        this.setState({allUser :resp});
      } else {
        alert("Sorry, we couldn't fetch users detail");
      }
    });
  };

  componentDidMount() {
    this.updateUserList();
  }


  handleDeleteUser = (username) => {
    DeleteUser(`username=${username}`).then((resp) => {
      if (resp) {
        alert("User Deleted");
        this.updateUserList();
        this.setState({ value: this.state.value + 1 });
      } else {
        alert("Sorry! We couldnot delete user.");
      }
    });
  };

  render() {
    return (
      <div className="container">
        <div
          className="col-md-8 ml-auto mr-auto my-4 p-4"
          style={{ background: "whitesmoke" }}
        >
          <h2>
            <span className="text-center ml-4"> All Users</span>
          </h2>

          <table className="table">
            <thead>
              <tr>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.allUser.length > 0 ? (
                this.state.allUser.map((usr) => (
                  <tr key={usr.username}>
                    <td>{usr.username} </td>
                    <td>{usr.email}</td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => {
                          this.handleDeleteUser(usr.username);
                        }}
                      >
                        Delete{" "}
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6}>No User</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default AllUser;
