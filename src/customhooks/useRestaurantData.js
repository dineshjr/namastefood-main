import { useState, useEffect } from "react";

const useRestaurantData = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0843007&lng=80.2704622&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();

      // Extract restaurants from all cards dynamically
      const allRestaurants = [];
      const cards = json?.data?.cards || [];

      for (const card of cards) {
        const restaurants =
          card?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        allRestaurants.push(...restaurants);
        
      }

      // Set the combined data to state
      setListOfRes(allRestaurants);
      setSearchResult(allRestaurants);
  
      
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  };

  const handleSearch = () => {
    const searchList = listOfRes.filter((res) =>
      res.info.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResult(searchList);
  };

  const handleFilterTopRated = () => {
    const filteredList = listOfRes.filter((res) => res.info.avgRating > 4.3);
    setSearchResult(filteredList);
  };

  return {
    listOfRes,
    query,
    searchResult,
    setQuery,
    handleSearch,
    handleFilterTopRated,
  };
};

export default useRestaurantData;
