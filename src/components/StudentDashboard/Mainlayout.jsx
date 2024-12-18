import React from 'react';
import { Outlet } from 'react-router-dom'; // For rendering child routes
import Sidebar from './Sidebar'; // Import your sidebar component

const MainLayout = () => {

  return (

    <div className="flex h-screen pl-12 " 
    style={{ marginTop:"-3rem"}} >
      {/* Sidebar */}
      <Sidebar />
      

      {/* Content Area */}
      <div className="flex-1 p-8 bg-gray-100 overflow-auto">
        {/* This will render the child components based on the active route */}
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
