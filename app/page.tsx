"use client";


import Link from "next/link";
import Navbar from "../components/Navbar";
import ProductCard from "@/components/ProductCard";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-blue-600 bg-gradient-to-r from-blue-600 to-indigo-600">
      <Navbar />
      <main className="py-10">
        <div className="max-w-7xl    sm:px-6 lg:px-8">
          <div className="flex-col">
            <div className="grid gap-x-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4"></div>
          </div>
        </div>
      </main>
    </div>

import AdminLayout from "../components/admin/Layout";

const Home: React.FC = () => {
  return (
    <AdminLayout>
      <div className="min-h-screen bg-gradient-to-r from-blue-600 to-indigo-600">
        <main className="py-10">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            {/* Your main content here */}
            <h1 className="text-5xl text-center text-white font-bold">Welcome to Batam Tech Store</h1>
            <p className="text-center text-white mt-4">Your one-stop shop for all tech needs.</p>
          </div>
        </main>
      </div>
    </AdminLayout>

  );
};

export default Home;
