"use client";

import Navbar from "@/components/admin/Navbar";
import CategoryMain from "@/components/CategoryMain";
import ProductMain from "@/components/ProductMain";
import Sidebar from "@/components/admin/Sidebar";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 ml-64 bg-blue-600 bg-gradient-to-r from-blue-600 to-indigo-600">
        <Navbar />
        <main className="py-10">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <CategoryMain />
            <ProductMain />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
