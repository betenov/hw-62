import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <NavLink to={"/"} className="navbar-brand d-inline p-2 text-bg-primary rounded-3">Photo-Print</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink to={"/"} className="nav-link" aria-current="page">Home</NavLink>
              <NavLink to={"/pricing"} className="nav-link">Pricing</NavLink>
              <NavLink to={"/contacts"} className="nav-link">Contacts</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;