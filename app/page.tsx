"use client";

import Navbar from "@/components/admin/Navbar";
import CategoryMain from "@/components/CategoryMain";
import ProductMain from "@/components/ProductMain";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 to-indigo-600">
      <Navbar />
      <main className="py-10">
        <div className="max-w-7xl    sm:px-6 lg:px-8">
          <CategoryMain />
          <ProductMain />
        </div>
      </main>
    </div>
  );
};

export default Home;
