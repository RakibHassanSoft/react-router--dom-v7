import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-6">Learn more about our team and mission</p>
      </section>

      {/* Our Mission */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Our Mission</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our mission is to create innovative solutions that empower people and
          businesses. We are passionate about providing high-quality products and
          services that bring positive change and lasting value to our clients.
        </p>
      </section>

      {/* Our Team */}
      <section className="bg-gray-200 py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-medium text-gray-700">John Doe</h3>
            <p className="text-gray-500">CEO & Founder</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-medium text-gray-700">Jane Smith</h3>
            <p className="text-gray-500">Lead Developer</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-medium text-gray-700">Sarah Lee</h3>
            <p className="text-gray-500">Marketing Manager</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-500 text-white py-20 text-center">
        <h2 className="text-3xl font-semibold mb-4">Join Us Today!</h2>
        <p className="text-lg mb-6">Be part of our mission and make a difference</p>
        <button className="bg-white text-blue-500 py-2 px-6 rounded-md shadow-md hover:bg-blue-100 transition">
          Get In Touch
        </button>
      </section>
    </div>
  );
};

export default About;
