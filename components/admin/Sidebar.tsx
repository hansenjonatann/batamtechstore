"use client";

import React from 'react';
import Link from 'next/link';
import { FaTachometerAlt, FaBoxOpen, FaListAlt, FaShoppingCart, FaUsers } from 'react-icons/fa';

const Sidebar: React.FC = () => {
  return (
    <div className="h-screen w-64 bg-purple-700 text-white shadow-lg fixed">
      <div className="flex items-center justify-center h-20 bg-gradient-to-r from-purple-500 to-blue-500">
        <h1 className="text-2xl font-bold">Batam Tech Store</h1>
      </div>
      <nav className="mt-10 flex flex-col">
        <Link href="/admin/dashboard" className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-purple-800 hover:bg-opacity-75">
          <FaTachometerAlt className="mr-3" /> Dashboard
        </Link>
        <Link href="/admin/products" className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-purple-800 hover:bg-opacity-75">
          <FaBoxOpen className="mr-3" /> Products
        </Link>
        <Link href="/admin/categories" className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-purple-800 hover:bg-opacity-75">
          <FaListAlt className="mr-3" /> Categories
        </Link>
        <Link href="/admin/orders" className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-purple-800 hover:bg-opacity-75">
          <FaShoppingCart className="mr-3" /> Orders
        </Link>
        <Link href="/admin/customers" className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-purple-800 hover:bg-opacity-75">
          <FaUsers className="mr-3" /> Customers
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
