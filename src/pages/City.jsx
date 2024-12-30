import React from 'react';
import { useParams, useNavigate } from 'react-router';

const City = () => {
    const { city } = useParams();
    const navigate = useNavigate();

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <section className="bg-blue-500 text-white py-16 text-center">
                <h1 className="text-4xl font-bold mb-4">Concerts in {city}</h1>
                <p className="text-lg mb-6">Check out all concerts happening in {city}!</p>
            </section>

            {/* Back Button */}
            <div className="text-center mb-8">
                <button
                    onClick={() => navigate(-1)}
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
                >
                    Back
                </button>
            </div>

            {/* Concerts List Section */}
            <section className="py-20 px-6">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
                    Upcoming Concerts in {city}
                </h2>
                <p className="text-lg text-center text-gray-600">Stay tuned for more details about concerts in {city}!</p>
            </section>

            {/* CTA Section */}
            <section className="bg-blue-500 text-white py-16 text-center">
                <h2 className="text-3xl font-semibold mb-4">Want to Perform in {city}?</h2>
                <p className="text-lg mb-6">If you're an artist looking to perform, we want to hear from you!</p>
                <button className="bg-white text-blue-500 py-2 px-6 rounded-md shadow-md hover:bg-blue-100 transition">
                    Contact Us
                </button>
            </section>
        </div>
    );
};

export default City;
