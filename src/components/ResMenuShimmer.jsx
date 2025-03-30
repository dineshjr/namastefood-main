import React from "react";

const ResMenuShimmer = ({ count }) => {
  return (
    <div className="max-w-5xl mx-auto py-8">
      <h1 className="text-2xl font-semibold text-gray-400 text-center mb-6">
        Loading Menu...
      </h1>

      <div className="space-y-6">
        {[...Array(count)].map((_, index) => (
          <div
            className="flex items-center p-4 bg-white shadow-md rounded-lg animate-pulse"
            key={index}
          >
            {/* Shimmer for Image */}
            <div className="w-24 h-24 bg-gray-200 rounded-lg"></div>

            <div className="ml-4 flex-1 space-y-3">
              {/* Shimmer for Title */}
              <div className="w-2/3 h-4 bg-gray-200 rounded"></div>

              {/* Shimmer for Description */}
              <div className="w-5/6 h-3 bg-gray-200 rounded"></div>
              <div className="w-3/4 h-3 bg-gray-200 rounded"></div>

              {/* Shimmer for Price */}
              <div className="w-1/4 h-4 bg-gray-200 rounded"></div>

              {/* Shimmer for Button */}
              <div className="w-1/3 h-8 bg-gray-200 rounded-lg"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResMenuShimmer;
