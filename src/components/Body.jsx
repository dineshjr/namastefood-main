import Shimmer from "./Shimmer";
import Footer from "./Footer";
import RestaurantCard from "./RestaurantCard";
import useRestaurantData from "../customhooks/useRestaurantData";
import useStatus from "../customhooks/useStatus";

const Body = () => {
  const {
    listOfRes,
    query,
    searchResult,
    setQuery,
    handleSearch,
    handleFilterTopRated,
  } = useRestaurantData();

  const { onlineStatus } = useStatus();

  if (!onlineStatus)
    return (
      <div className="flex flex-row items-center justify-center h-screen bg-gray-50">
        <div className="flex items-center space-x-3 bg-red-100 text-red-700 px-6 py-3 rounded-lg shadow-lg">
          <span className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></span>
          <h1 className="text-lg font-semibold">
            Please Check Your Internet Connection
          </h1>
        </div>
      </div>
    );

  return listOfRes.length === 0 ? (
    <Shimmer count={100} />
  ) : (
    <>
      {/* Online Status Indicator */}
      <div className="flex justify-center py-2 bg-green-100 text-green-800 text-sm font-semibold shadow-md">
        <span className="w-3 h-3 bg-green-500 rounded-full animate-ping mr-2"></span>
        You are online
      </div>

      {/* Search & Filter Section */}
      <div className="max-w-5xl mx-auto py-8 px-4 md:px-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="relative w-full md:w-2/3">
            <input
              type="text"
              placeholder="🔍 Search for a restaurant..."
              className="w-full p-4 border border-gray-300 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <button
              className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-orange-600 transition-all"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>

          <button
            className="px-6  py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-medium rounded-full shadow-lg hover:scale-105 transition-all"
            onClick={handleFilterTopRated}
          >
            ⭐ Top Rated Restaurants
          </button>
        </div>
      </div>

      {/* Restaurant List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 p-4 m-4">
  {searchResult.map((restaurant , index) => (
  <RestaurantCard key={`${restaurant.info.id}-${index}`} restaurants={restaurant} />
))}

{}
</div>

      {/* Footer */}
      <Footer/>
    </>
  );
};

export default Body;
