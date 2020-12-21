import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {

  const handle_logout = () => {
    localStorage.removeItem("token");
    
  };
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        My App
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
        <li className="nav-item active">
            <Link to="/allUser" className="nav-link">
              Users
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/task" className="nav-link">
              Tasks
            </Link>
          </li>
          {/* <li className="nav-item">
      <Link to="auth"  className="nav-link">Edit</Link>
      </li> */}
          <li className="nav-item active">
            {localStorage.getItem("token") ? (
              <a onClick={handle_logout}  href="" className="nav-link">
                Logout
              </a>
            ) : (
              <Link to="/auth" className="nav-link">
                Login
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
