import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import '../pages/Resmenu.css';

const MenuPage = () => {
  const [menuItem, setMenuItem] = useState([]);
  const [resName, setResName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6); // You can adjust the number of items per page
  const { restaurantId } = useParams();


  useEffect(() => {
    if (restaurantId) {
      fetchMenu();
    }
  }, [restaurantId]);

  const fetchMenu = async () => {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0843007&lng=80.2704622&restaurantId=${restaurantId}&catalog_qa=undefined&submitAction=ENTER`
      );
      
      const json = await response.json();
      const resName = json?.data?.cards[0]?.card?.card?.text;
      setResName(resName);

      const cards = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
      const cardData = cards
        .map((card) => card?.card?.card?.itemCards)
        .flat()
        .filter(Boolean);

      setMenuItem(cardData); // Set the menu items in the state
      console.log(cardData)
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = menuItem.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(menuItem.length / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  return (
    <div className="menu-page">
      <h1 className="menu-title">{resName}</h1>

      {/* Render menu items */}
      <div className="menu-list">
        {currentItems.length > 0 ? (
          currentItems.map((item, index) => {
            const details = item?.card?.info; // Access details for the menu item
            console.log(details)
            if (!details) {
              return null; // Skip rendering if details are missing
            }

            const price = details?.price / 100 || details?.defaultPrice / 100 || 0;

            return (
              <div key={index} className="menu-item-card">
                <div className="menu-item-left">
                  <img
                    className="menu-item-image"
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${details?.imageId}`}
                    alt={details?.name}
                  />
                </div>
                <div className="menu-item-right">
                  <h2 className="menu-item-name">{details?.name}</h2>
                  <p className="menu-item-description">{details?.description}</p>
                  <p className="menu-item-price">₹{price.toFixed(2)}</p>
                  <button className="order-btn">Order Now</button>
                </div>
              </div>
            );
          })
        ) : (
          <div>Loading menu...</div> // Show loading state if menu items are not loaded
        )}
      </div>

      {/* Pagination Controls */}
      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button onClick={nextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default MenuPage;
