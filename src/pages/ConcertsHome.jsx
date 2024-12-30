import React from 'react';
import { Link } from 'react-router';

const ConcertsHome = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Hero Section */}
            <section className="bg-blue-500 text-white py-16 text-center">
                <h1 className="text-4xl font-bold mb-4">Upcoming Concerts</h1>
                <p className="text-lg mb-6">Discover the best concerts happening near you!</p>
            </section>

            {/* Concerts Section */}
            <section className="py-20 px-6">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">Featured Concerts</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {/* Concert Card 1 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                        <img
                            src="https://via.placeholder.com/400x250"
                            alt="Concert"
                            className="w-full h-48 object-cover rounded-t-lg mb-4"
                        />
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Rock Festival 2024</h3>
                        <p className="text-gray-600 mb-4">Join the biggest rock festival of the year with top bands performing live!</p>
                        <Link to={`/concerts/${2}`}>
                          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">
                            Buy Tickets
                        </button>
                        </Link>
                    </div>

                    {/* Concert Card 2 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                        <img
                            src="https://via.placeholder.com/400x250"
                            alt="Concert"
                            className="w-full h-48 object-cover rounded-t-lg mb-4"
                        />
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">EDM Party Night</h3>
                        <p className="text-gray-600 mb-4">Get ready for an electrifying night of EDM with world-renowned DJs!</p>
                        <Link to={`/concerts/${1}`}>
                          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">
                            Buy Tickets
                        </button>
                        </Link>
                        
                    </div>

                    {/* Concert Card 3 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                        <img
                            src="https://via.placeholder.com/400x250"
                            alt="Concert"
                            className="w-full h-48 object-cover rounded-t-lg mb-4"
                        />
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Jazz in the Park</h3>
                        <p className="text-gray-600 mb-4">Enjoy a peaceful evening of live jazz music in the park.</p>
                        <Link to={`/concerts/${3}`}>
                          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">
                            Buy Tickets
                        </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-blue-500 text-white py-16 text-center">
                <h2 className="text-3xl font-semibold mb-4">Want to Perform?</h2>
                <p className="text-lg mb-6">If you're an artist looking to perform, we want to hear from you!</p>
                <Link to={`concerts/${4}`}>
                          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">
                            Buy Tickets
                        </button>
                        </Link>
            </section>
        </div>
    );
};

export default ConcertsHome;
