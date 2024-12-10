import React from "react";

function HomePage({ userId }) {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-center mb-6">
                Welcome to the Home Page!
            </h1>
            <p className="text-center text-gray-700">Logged in as User ID: {userId}</p>
            <div className="flex flex-col items-center mt-8">
                <button className="w-60 bg-blue-500 text-white py-2 px-4 rounded mb-4 hover:bg-blue-600">
                    My Profile
                </button>
                <button className="w-60 bg-blue-500 text-white py-2 px-4 rounded mb-4 hover:bg-blue-600">
                    My Projects
                </button>
                <button className="w-60 bg-blue-500 text-white py-2 px-4 rounded mb-4 hover:bg-blue-600">
                    Student List
                </button>
                <button className="w-60 bg-blue-500 text-white py-2 px-4 rounded mb-4 hover:bg-blue-600">
                    Faculty List
                </button>
                <button className="w-60 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                    Project List
                </button>
            </div>
        </div>
    );
}

export default HomePage;
