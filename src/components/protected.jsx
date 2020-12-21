import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import Navbar from "./navbar";

function Protected(props) {
  const Cmp = props.cmp;
  var auth = localStorage.getItem("token");
  return (
    <div>
      {" "}
      {auth ? (
        <React.Fragment>
          {" "}
          <Navbar />
          <Cmp />
        </React.Fragment>
      ) : (
        <Redirect to="/auth"></Redirect>
      )}{" "}
    </div>
  );
}

export default withRouter(Protected);
