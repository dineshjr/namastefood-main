import React from "react";
import "../components/ResMenuShimmer.css"; // Ensure your shimmer CSS is in place

const ResMenuShimmer = ({ count }) => {
  return (
    <div className="resMenuShimmer-container">
      <h1 className="resMenuShimmer-title">Loading Menu...</h1>

      <div className="resMenuShimmer-list">
        {/* Render 'count' number of shimmer cards */}
        {[...Array(count)].map((_, index) => (
          <div className="resMenuShimmer-item-card resMenuShimmer-card" key={index}>
            {/* Shimmer for Image */}
            <div className="resMenuShimmer-image"></div>

            <div className="resMenuShimmer-item-right">
              {/* Shimmer for Title */}
              <div className="resMenuShimmer-text resMenuShimmer-name"></div>

              {/* Shimmer for Description */}
              <div className="resMenuShimmer-text resMenuShimmer-description"></div>

              {/* Shimmer for Price */}
              <div className="resMenuShimmer-text resMenuShimmer-price"></div>

              {/* Shimmer for Order Button */}
              <div className="resMenuShimmer-btn"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResMenuShimmer;
