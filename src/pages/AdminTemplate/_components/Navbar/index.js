import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { actLogout } from "pages/AdminTemplate/AuthPage/duck/actions";
import { useDispatch } from "react-redux";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
      {/* Brand */}
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      {/* Toggler/collapsibe Button */}
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span className="navbar-toggler-icon" />
      </button>
      {/* Navbar links */}
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "my-active nav-link" : "nav-link"
              }
              to="/admin/dashboard"
            >
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "my-active nav-link" : "nav-link"
              }
              to="/admin/add-user"
            >
              Add User
            </NavLink>
          </li>
          <li className="nav-item ml-3">
            <button
              className="btn btn-info"
              onClick={() => {
                dispatch(actLogout(navigate));
              }}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
