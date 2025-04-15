/* eslint-disable react/prop-types */
import { Link } from "react-router";

const RestaurantCard = ({ restaurants }) => {
  if (!restaurants) return null;

  const {
    id,
    name,
    locality,
    costForTwo,
    avgRating,
    cuisines,
    cloudinaryImageId,
  } = restaurants.info;

  return (
    <div
      key={id}
      className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl w-80 p-5 space-y-4"
    >
      <div className="relative w-full">
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_160/${cloudinaryImageId}`}
          alt={name}
          className="w-full h-48 object-cover rounded-md"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <span className="absolute top-3 left-3 bg-black bg-opacity-60 text-white px-2 py-1 text-xs rounded-md">
          ⭐ {avgRating || "N/A"}
        </span>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{name}</h3>
        <p className="text-sm text-gray-500 truncate">
          {cuisines.length > 0 ? cuisines.join(", ") : "No Cuisines Available"}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-600 gap-3">
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-md">
            {costForTwo || "Price Unavailable"}
          </span>
          <span className="text-gray-500 truncate">
            {locality || "Location Unknown"}
          </span>
        </div>

        <div className="mt-4">
          <Link
            to={`/restaurants/${id}`}
            className="block text-center px-4 py-2 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition duration-300"
          >
            View Menu
          </Link>
        </div>
      </div>
    </div>
  );
};

// ✅ Higher Order Component to show "Top Rated" badge
export const withTopRatedBadge = (WrappedComponent) => {
  const EnhancedComponent = ({ restaurants, ...props }) => {
    const isTopRated =
      restaurants?.info?.totalRatingsString?.includes("+") || 
      parseFloat(restaurants?.info?.avgRating) >= 4.3;

    return (
      <div className="relative">
        {isTopRated && (
          <div className="absolute top-3 right-3 bg-yellow-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow z-10">
            ⭐ Top Rated
          </div>
        )}
        <WrappedComponent restaurants={restaurants} {...props} />
      </div>
    );
  };

  EnhancedComponent.displayName = `WithTopRatedBadge(${WrappedComponent.displayName || 'Component'})`;
  return EnhancedComponent;
};

export default RestaurantCard;
