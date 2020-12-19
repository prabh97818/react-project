import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { VerifyThis } from "../services/myrequests";

const VerifyAccount = (props) => {
   
  const [isVerified, setisVerified] = useState({isTrue:false});

  useEffect(() => {
    VerifyThis(props.match.params.token).then((resp) => {
      setisVerified({isTrue:true});
      if (resp) {
        if (resp.success) {
          alert(resp.success);
        } else {
          alert(resp.failed);
        }
        console.log(resp)
      } else {
        alert("Worry we couldn't verify your account");
      }
    });
  }, []);

  return (
    <div className="container">
      {isVerified.isTrue ? (
        <h1 className="text-center">Verifying...</h1>
      ) : ( 
        <Redirect to="/auth" />
      )}
    </div>
  );
};

export default VerifyAccount;
