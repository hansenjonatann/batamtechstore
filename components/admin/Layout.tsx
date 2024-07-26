"use client";
import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="flex-1 p-6 bg-gradient-to-r from-blue-600 to-indigo-600">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
