import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../context/Context';

const Navbar = () => {
  const { isAuthenticated, logout } = useContext(userContext);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Navbar</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {isAuthenticated ? (
              <>
                <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
                </li>
              </>
            ):""}
          </ul>
          <div className="d-flex gap-4">
            {!isAuthenticated ? (
              <>
                <Link to="/login" className="btn btn-primary">Login</Link>
                <Link to="/signup" className="btn btn-primary">Signup</Link>
              </>
            ) : (
              <>
              
              <button className="btn btn-danger" onClick={logout}>Logout</button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
