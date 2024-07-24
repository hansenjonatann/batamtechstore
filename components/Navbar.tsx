"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" legacyBehavior>
                <a className="text-white font-bold text-2xl">Batam Tech Store</a>
              </Link>
            </div>
          </div>
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link href="/" legacyBehavior>
              <a className="text-white hover:bg-purple-700 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium">Home</a>
            </Link>
            <Link href="/category" legacyBehavior>
              <a className="text-white hover:bg-purple-700 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium">Categories</a>
            </Link>
            <Link href="/product" legacyBehavior>
              <a className="text-white hover:bg-purple-700 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium">Products</a>
            </Link>
            <Link href="/about" legacyBehavior>
              <a className="text-white hover:bg-purple-700 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium">About</a>
            </Link>
            <Link href="/contact" legacyBehavior>
              <a className="text-white hover:bg-purple-700 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </Link>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link href="/" legacyBehavior>
            <a className="text-white hover:bg-purple-700 hover:bg-opacity-75 block px-3 py-2 rounded-md text-base font-medium">Home</a>
          </Link>
          <Link href="/category" legacyBehavior>
            <a className="text-white hover:bg-purple-700 hover:bg-opacity-75 block px-3 py-2 rounded-md text-base font-medium">Categories</a>
          </Link>
          <Link href="/product" legacyBehavior>
            <a className="text-white hover:bg-purple-700 hover:bg-opacity-75 block px-3 py-2 rounded-md text-base font-medium">Products</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className="text-white hover:bg-purple-700 hover:bg-opacity-75 block px-3 py-2 rounded-md text-base font-medium">About</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className="text-white hover:bg-purple-700 hover:bg-opacity-75 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
