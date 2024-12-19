import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import Footer from "./Footer";
import { Link } from "react-router";

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [query, setQuery] = useState("");
  const [searchResult, setsearchResult] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0843007&lng=80.2704622&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await response.json();
    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
      setListOfRes(restaurants);
      setsearchResult(restaurants);
    
  };

  return listOfRes.length === 0 ? (
    <Shimmer count={100} />
  ) : (
    <>
      {/* Render the content after the data is fetched */}

      {/* Search Section */}
      <div className="search-filter-container">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for a restaurant..."
            className="search-input"
            value={query}
            onChange={() => {
              setQuery(event.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const searchList = listOfRes.filter((res) =>
                res.info.name.toLowerCase().includes(query.toLowerCase())
              );
              setsearchResult(searchList);
            }}
          >
            Search
          </button>
        </div>

        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = listOfRes.filter(
                (res) => res.info.avgRating > 4.3
              );
              setsearchResult(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      {/* Restaurant List */}
      <div className="restaurant-list">
        {searchResult.map((restaurant) => {
          const restaurantData = restaurant.info;
          if (!restaurantData) return null;

          return (
            <div key={restaurantData.id} className="card">
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurantData.cloudinaryImageId}`}
                alt={restaurantData.name}
                className="w-full h-48 object-cover rounded"
              />
              <h3 className="font-semibold">{restaurantData.name}</h3>
              <p>
                {restaurantData.locality}, {restaurantData.areaName}
              </p>
              <p>{restaurantData.costForTwo}</p>
              <div>
                <span className="font-semibold text-green-500">
                  {restaurantData.avgRating} ⭐
                </span>
                <span>{restaurantData.totalRatingsString}</span>
              </div>
              <p>{restaurantData.cuisines.join(", ")}</p>
              <Link to={`/restaurants/${restaurant.info.id}`}>View Menu</Link>
            </div>
          );
        })}
      </div>

      {/* Footer */}
    </>
  );
};

export default Body;
