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
  );
};

export default Home;
