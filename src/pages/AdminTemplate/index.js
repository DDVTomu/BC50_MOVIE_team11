import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import Sidebar from "./_components/Sidebar";
import Topbar from "./_components/Topbar";

const AdminTemplate = ({ children }) => {
  //===================================================================================================
  //Check login
  // if (!localStorage.getItem('UserAdmin')) {
  //   return <Navigate to='/auth' replace />
  // }

  // const [pageTitle, setPageTitle] = useState("");

  // useEffect(() => {
  //   // Update pageTitle here based on the current route or other logic
  //   setPageTitle("Title for the current page");
  // }, []);

  return (
    <div className="flex w-screen h-screen">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        {/* <Topbar pageTitle={pageTitle} /> */}
        <Topbar />

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto bg-gray-100 p-4">
          <div className="container mx-auto">
            <Outlet />
          </div>
        </div>

        {/* Footer */}
        <footer className="sticky-footer bg-white">
          <div className="container my-auto">
            <div className="copyright text-center my-auto">
              <span>Copyright © Your Website 2023</span>
            </div>
          </div>
        </footer>
        {/* End of Footer */}
      </div>
    </div>
  );
};

export default AdminTemplate;