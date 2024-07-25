"use client";
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
