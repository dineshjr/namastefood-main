import React from "react";
import '../index.css'

const Shimmer = ({ count }) => {
  return (
    <div className="shimmer-container">
      <div className="shimmer-search-filter-container">
        <div className="shimmer-search-container">
          <div className="shimmer-search-input"></div>
          <div className="shimmer-search-btn"></div>
        </div>

        <div className="shimmer-filter-btn"></div>
      </div>
      {/* Render 'count' number of shimmer cards */}
      {[...Array(count)].map((_, index) => (
        <div className="shimmer-card" key={index}>
          {/* Shimmer for Image */}
          <div className="shimmer-image"></div>

          {/* Shimmer for Title */}
          <div className="shimmer-text shimmer-title"></div>

          {/* Shimmer for Location */}
          <div className="shimmer-text shimmer-location"></div>

          {/* Shimmer for Rating */}
          <div className="shimmer-text shimmer-rating"></div>

          {/* Shimmer for Cuisines */}
          <div className="shimmer-text shimmer-cuisines"></div>

          {/* Shimmer for Cost */}
          <div className="shimmer-text shimmer-cost"></div>
        </div>
      ))}

      {/* Shimmer for Search Section */}
    </div>
  );
};

export default Shimmer;
