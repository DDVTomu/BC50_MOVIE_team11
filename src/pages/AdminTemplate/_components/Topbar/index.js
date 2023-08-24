import React, { useState, Fragment } from "react";
import { NavLink } from "react-router-dom";

export default function Topbar({ pageTitle }) {
  console.log('Topbar rendering'); // Add this line

  return (
    <nav className='navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow'>
      {/* Sidebar Toggle (Topbar) */}
      <button
        id='sidebarToggleTop'
        className='btn btn-link d-md-none rounded-circle mr-3'
      >
        <i className='fa fa-bars' />
      </button>

      <div className="bg-white">
        {/* ... */}
        <div className="flex items-center justify-start">
          <h2 className="text-xl font-semibold">{pageTitle}</h2>
        </div>
        {/* ... */}
      </div>

      {/* Topbar Navbar */}
      <ul className='navbar-nav ml-auto'>
        {/* Nav Item - User Information */}
        <li className='nav-item dropdown no-arrow'>
          <a
            className='nav-link dropdown-toggle'
            href='/#'
            id='userDropdown'
            role='button'
            data-toggle='dropdown'
            aria-haspopup='true'
          >
            <span className='mr-3 d-none d-lg-inline text-green-700 font-medium '>
              PHAM HUU TRI
            </span>
            <img className='img-profile rounded-circle' />
          </a>
          {/* Dropdown - User Information */}
          <div
            className={
              'dropdown-menu dropdown-menu-right shadow animated--grow-in'
            }
            aria-labelledby='userDropdown'
          >

            <div className='dropdown-item' href='/#'>
              <i className='fas fa-user fa-sm fa-fw mr-2 text-gray-400' />
              <NavLink
                to={'/admin/Profile'}
              >Profile
              </NavLink>
            </div>

            <div className='dropdown-divider' />

            <div
              className='dropdown-item'
              href='/#'
              data-toggle='modal'
              data-target='#logoutModal'
            >
              <i className='fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400' />
              <NavLink>
                Logout
              </NavLink>
            </div>
          </div>
        </li>

        {/* Divider */}
        <div className='topbar-divider d-none d-sm-block' />

        {/* Nav Item - User Logout */}
        <li className='nav-item no-arrow'>
          <a
            className='nav-link'
            href='/#'
            data-toggle='modal'
            data-target='#logoutModal'
          >
            <span className='d-none d-lg-inline text-red-600  '>
              Log Out
            </span>
          </a>
        </li>
      </ul>
    </nav >

  );
}
