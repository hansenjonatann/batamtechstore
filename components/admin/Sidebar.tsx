"use client";
import Link from 'next/link';
import { FaTachometerAlt, FaBoxOpen, FaListAlt, FaShoppingCart, FaUsers } from 'react-icons/fa';

const Sidebar: React.FC = () => {
  return (
    <div className="h-screen w-64 bg-purple-700 text-white shadow-lg fixed">
      <div className="flex items-center justify-center h-20 bg-gradient-to-r from-purple-500 to-blue-500">
        <h1 className="text-2xl font-bold">Batam Tech Store</h1>
      </div>
      <nav className="mt-10 flex flex-col">
        <Link href="/admin/dashboard" legacyBehavior>
          <a className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-purple-800 hover:bg-opacity-75">
            <FaTachometerAlt className="mr-3" /> Dashboard
          </a>
        </Link>
        <Link href="/admin/products" legacyBehavior>
          <a className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-purple-800 hover:bg-opacity-75">
            <FaBoxOpen className="mr-3" /> Products
          </a>
        </Link>
        <Link href="/admin/categories" legacyBehavior>
          <a className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-purple-800 hover:bg-opacity-75">
            <FaListAlt className="mr-3" /> Categories
          </a>
        </Link>
        <Link href="/admin/orders" legacyBehavior>
          <a className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-purple-800 hover:bg-opacity-75">
            <FaShoppingCart className="mr-3" /> Orders
          </a>
        </Link>
        <Link href="/admin/customers" legacyBehavior>
          <a className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-purple-800 hover:bg-opacity-75">
            <FaUsers className="mr-3" /> Customers
          </a>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
