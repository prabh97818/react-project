import React from 'react';
import {Redirect} from "react-router-dom";

function Public(props) {
    const Cmp = props.cmp
    var auth = localStorage.getItem("token")
    return <div> {!auth ? <Cmp /> : <Redirect to="/"></Redirect> } </div>
}

export default Public;