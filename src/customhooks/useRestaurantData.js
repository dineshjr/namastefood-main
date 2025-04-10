import { useState, useEffect } from "react";

const useRestaurantData = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [nextPageUrl, setNextPageUrl] = useState(null); // Store next page URL
  const restaurantIds = new Set(); // Track unique restaurant IDs

  useEffect(() => {
    fetchData("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0843007&lng=80.2704622&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fetchData = async (url) => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const response = await fetch(url);
      const json = await response.json();

      const allRestaurants = [];
      const cards = json?.data?.cards || [];

      for (const card of cards) {
        const restaurants =
          card?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

        // Filter out duplicate restaurants
        const uniqueRestaurants = restaurants.filter((res) => {
          if (!restaurantIds.has(res.info.id)) {
            restaurantIds.add(res.info.id);
            return true;
          }
          return false;
        });

        allRestaurants.push(...uniqueRestaurants);
      }

      if (allRestaurants.length > 0) {
        setListOfRes((prev) => [...prev, ...allRestaurants]);
        setSearchResult((prev) => [...prev, ...allRestaurants]);
      } else {
        setHasMore(false);
      }

      // Update next page URL if available
      const nextPage = json?.data?.nextPageUrl;
      if (nextPage) {
        setNextPageUrl(nextPage);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 100 >=
      document.documentElement.offsetHeight
    ) {
      if (nextPageUrl) {
        fetchData(nextPageUrl);
      }
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
    loading,
  };
};

export default useRestaurantData;
