import React from 'react';

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand d-inline p-2 text-bg-primary rounded-3">Photo-Print</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
              <a className="nav-link">Pricing</a>
              <a className="nav-link">Contacts</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;