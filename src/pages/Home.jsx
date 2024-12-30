import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-green-500 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-lg mb-6">Your one-stop solution for all your needs</p>
        <button className="bg-white text-green-500 py-2 px-6 rounded-md shadow-md hover:bg-green-100 transition">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Our Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-medium text-gray-700 mb-3">Feature 1</h3>
            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-medium text-gray-700 mb-3">Feature 2</h3>
            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-medium text-gray-700 mb-3">Feature 3</h3>
            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-medium text-gray-700 mb-3">Feature 4</h3>
            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-200 py-20 px-4 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-medium text-gray-700 mb-3">Service 1</h3>
            <p className="text-gray-500">A brief description of the service offered.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-medium text-gray-700 mb-3">Service 2</h3>
            <p className="text-gray-500">A brief description of the service offered.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-medium text-gray-700 mb-3">Service 3</h3>
            <p className="text-gray-500">A brief description of the service offered.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-green-500 text-white py-20 text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to get started?</h2>
        <p className="text-lg mb-6">Join us today and experience amazing services tailored just for you.</p>
        <button className="bg-white text-green-500 py-2 px-6 rounded-md shadow-md hover:bg-green-100 transition">
          Sign Up Now
        </button>
      </section>
    </div>
  );
};

export default Home;
