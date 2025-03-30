import { useState, useEffect } from "react";

const useFetchMenu = (restaurantId) => {
  const [menuItems, setMenuItems] = useState([]);
  const [restaurantName, setRestaurantName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!restaurantId) return;

    const fetchMenu = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0843007&lng=80.2704622&restaurantId=${restaurantId}&catalog_qa=undefined&submitAction=ENTER`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch menu data");
        }

        const json = await response.json();

        // Extract restaurant name
        const resName = json?.data?.cards[0]?.card?.card?.text || "Restaurant";
        setRestaurantName(resName);

        // Extract menu items
        const cards =
          json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
        const cardData = cards
          .map((card) => card?.card?.card?.itemCards)
          .flat()
          .filter(Boolean);

        setMenuItems(cardData);
      } catch (err) {
        console.error("Error fetching menu:", err);
        setError(err.message || "An error occurred while fetching the menu.");
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, [restaurantId]);
  console.log({ menuItems, restaurantName, loading, error });
  return { menuItems, restaurantName, loading, error };
};

export default useFetchMenu;
