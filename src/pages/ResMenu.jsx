import React, { useState } from "react";
import { useParams } from "react-router";
import useFetchMenu from "../customhooks/useRestaurantMenu";

const MenuPage = () => {
  const { restaurantId } = useParams();
  const { menuItems, restaurantName, loading, error } =
    useFetchMenu(restaurantId);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6); // Adjust as needed

  // Group menu items by category
  const categorizedItems = menuItems.reduce((acc, item) => {
    const category = item?.card?.info?.category || "Uncategorized";
    if (!acc[category]) acc[category] = [];
    acc[category].push(item);
    return acc;
  }, {});

  // Pagination logic
  const categoryKeys = Object.keys(categorizedItems);
  const totalPages = Math.ceil(categoryKeys.length / itemsPerPage);
  const currentCategories = categoryKeys.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const nextPage = () =>
    currentPage < totalPages && setCurrentPage((prev) => prev + 1);
  const prevPage = () => currentPage > 1 && setCurrentPage((prev) => prev - 1);

  if (loading)
    return (
      <div className="text-center text-gray-600 text-lg py-10">
        Loading menu...
      </div>
    );
  if (error)
    return (
      <div className="text-center text-red-500 text-lg py-10">
        Error: {error}
      </div>
    );

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-orange-500 text-center mb-6">
        {restaurantName}
      </h1>

      {/* Category-Based Menu Display */}
      {currentCategories.map((category) => (
        <div key={category} className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 border-b-2 border-orange-500 pb-2">
            {category}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {categorizedItems[category].map((item, index) => {
              const details = item?.card?.info;
              if (!details) return null;

              const price =
                details?.price / 100 || details?.defaultPrice / 100 || 0;

              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition"
                >
                  <img
                    className="w-full h-40 object-cover rounded-md mb-3"
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${details?.imageId}`}
                    alt={details?.name}
                  />
                  <h3 className="text-lg font-semibold text-gray-800 truncate">
                    {details?.name}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2">
                    {details?.description || "Delicious food item"}
                  </p>
                  <p className="text-lg font-semibold text-orange-500 mt-2">
                    ₹{price.toFixed(2)}
                  </p>
                  <button className="w-full mt-3 bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition">
                    Add to Cart
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-4 mt-6">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 border rounded-md ${
              currentPage === 1
                ? "text-gray-400 border-gray-300"
                : "text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white"
            }`}
          >
            Previous
          </button>
          <span className="text-gray-600 font-semibold">{`Page ${currentPage} of ${totalPages}`}</span>
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 border rounded-md ${
              currentPage === totalPages
                ? "text-gray-400 border-gray-300"
                : "text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default MenuPage;
