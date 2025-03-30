import React from "react";

const Shimmer = ({ count }) => {
  return (
    <div className="max-w-6xl mx-auto py-8">
      {/* Search & Filter Section Shimmer */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-6 px-4 space-y-4 md:space-y-0">
        <div className="flex w-full md:w-2/3 space-x-2 animate-pulse">
          <div className="w-full h-12 bg-gray-200 rounded-lg"></div>
          <div className="w-24 h-12 bg-gray-300 rounded-lg"></div>
        </div>
        <div className="w-40 h-12 bg-gray-300 rounded-lg animate-pulse"></div>
      </div>

      {/* Render 'count' number of shimmer cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {[...Array(count)].map((_, index) => (
          <div
            className="p-4 bg-white shadow-md rounded-lg animate-pulse space-y-4"
            key={index}
          >
            {/* Shimmer for Image */}
            <div className="w-full h-40 bg-gray-200 rounded-lg"></div>

            {/* Shimmer for Title */}
            <div className="w-3/4 h-5 bg-gray-300 rounded"></div>

            {/* Shimmer for Location */}
            <div className="w-1/2 h-4 bg-gray-200 rounded"></div>

            {/* Shimmer for Rating */}
            <div className="w-1/4 h-4 bg-gray-300 rounded"></div>

            {/* Shimmer for Cuisines */}
            <div className="w-2/3 h-4 bg-gray-200 rounded"></div>

            {/* Shimmer for Cost */}
            <div className="w-1/3 h-5 bg-gray-300 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
