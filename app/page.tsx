import Navbar from "../components/Navbar";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-blue-600 bg-gradient-to-r from-blue-600 to-indigo-600">
      <Navbar />
      <main className="py-10">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8"></div>
      </main>
    </div>
  );
};

export default Home;
