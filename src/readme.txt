Global Styles body {
  font-family: "Roboto", sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f7f8fa;
  color: #333;
  line-height: 1.6;
  box-sizing: border-box;
}

/* General Header Styles */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f8c146;
  padding: 1.2rem 2rem;
  color: white;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  border-bottom: 2px solid #f1e3b5;
}

.nav-items li a {
  text-decoration: none; /* Remove the default underline */
  color: inherit; /* Inherit the color from the parent li element */
  transition: color 0.3s ease, transform 0.3s ease;
}

.nav-items li a:hover {
  color: #ff6a13; /* Apply the hover color */
  transform: scale(1.1); /* Apply the hover scale effect */
}

.header h1 {
  font-size: 2rem;
  font-weight: 700;
}

/* Navigation Styling */
.nav-items {
  display: flex;
  align-items: center;
}

.nav-items ul {
  display: flex;
  list-style: none;
  gap: 1.8rem;
  padding: 0;
  margin: 0;
  align-items: center;
}

.nav-items li {
  cursor: pointer;
  font-size: 1.1rem;
  transition: color 0.3s ease, transform 0.3s ease;
}

.nav-items li:hover {
  color: #ff6a13;
  transform: scale(1.1);
}

/* Mobile Menu */
.hamburger {
  display: none;
  font-size: 2rem;
  cursor: pointer;
}

/* Button Styling */
.login-btn {
  padding: 0.6rem 1.2rem;
  border: none;
  background-color: #ff6a13;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.login-btn:hover {
  background-color: #f8a847;
}

/* Media Queries for Mobile */
@media (max-width: 768px) {
  .header {
    padding: 1rem 1.5rem;
  }

  .header h1 {
    font-size: 1.6rem;
  }

  .nav-items ul {
    display: none; /* Hide nav links by default */
    flex-direction: column;
    position: absolute;
    top: 70px; /* Adjust based on header height */
    right: 0;
    background-color: #f8c146;
    width: 100%;
    padding: 1rem;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }

  .nav-items ul.open {
    display: flex; /* Show the menu when it's open */
  }

  .nav-items li {
    font-size: 1.2rem;
    margin: 1rem 0;
  }

  .hamburger {
    display: block;
  }
}

/* Restaurant List Styling */
.restaurant-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1.8rem;
  justify-content: center;
  padding: 3rem 2rem;
  transition: all 0.3s ease;
}

/* Card Styling */
.card {
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  text-align: center;
  width: 235px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  height: 100%;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.1);
}

.card img {
  width: 100%;
  border-radius: 15px;
  object-fit: fill;
  transition: transform 0.3s ease;
  height: 200px;
}

.card img:hover {
  transform: scale(1.1);
}

.card h3 {
  font-size: 1.5rem;
  margin-top: 1rem;
  color: #333;
}

.card p {
  font-size: 1rem;
  color: #777;
  margin-bottom: 0.8rem;
  line-height: 1.4;
}

.card .rating {
  background: #ff6a13;
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 20px;
  display: inline-block;
  margin-top: 0.8rem;
  font-weight: bold;
}

.card .cuisines {
  color: #aaa;
  margin-top: 1rem;
  font-size: 0.95rem;
  font-style: italic;
}

/* Footer Styling */
.footer {
  text-align: center;
  padding: 1.5rem;
  background-color: #333;
  color: white;
  margin-top: 3rem;
  font-size: 1rem;
}

.footer a {
  color: #f8c146;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer a:hover {
  color: #ffb84c;
}

/* Wrapper for search bar and filter button */
.search-filter-container {
  display: flex;
  justify-content: end;
  gap: 1rem; /* Space between search bar and filter button */
  margin: 20px auto;
  max-width: 900px; /* Optional to constrain the width */
  align-items: baseline;
  flex-wrap: wrap;
}

/* Search Container Styling */
.search-container {
  display: flex;
  align-items: baseline;
  justify-content: center;
  flex-grow: 1;
  max-width: 100%;
  margin-bottom: 1rem; /* For mobile responsiveness */
}

/* Search Input Styling */
.search-input {
  width: 70%;
  padding: 12px 20px;
  font-size: 1rem;
  border: 2px solid #ddd;
  border-radius: 30px 0 0 30px; /* Rounded left side */
  outline: none;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

/* Focus effect on input */
.search-input:focus {
  border-color: #ff6a13;
  box-shadow: 0 0 8px rgba(255, 106, 19, 0.3);
}

/* Search Button Styling */
.search-btn {
  padding: 12px 24px;
  font-size: 1rem;
  background-color: #ff6a13;
  color: white;
  border: none;
  border-radius: 0 30px 30px 0; /* Rounded right side */
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.search-btn:hover {
  background-color: #e55812;
  transform: translateY(-4px);
}

.search-btn:active {
  transform: translateY(0);
}

.search-btn:focus {
  outline: none;
}

/* Filter Button Styling */
.filter-btn {
  padding: 12px 24px;
  font-size: 1rem;
  background-color: #ff6a13;
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.filter-btn:hover {
  background-color: #e55812;
  transform: translateY(-4px);
}

.filter-btn:active {
  transform: translateY(0);
}

.filter-btn:focus {
  outline: none;
}

/* Shimmer Container */
/* Shimmer Container */
.shimmer-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  padding: 3rem 2rem;
}

/* Shimmer Card Styling */
.shimmer-card {
  width: 250px;
  background-color: #f0f0f0;
  border-radius: 12px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: shimmer 1.5s infinite linear;
}

/* Shimmer Effect Animation */
@keyframes shimmer {
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
}

/* Shimmer Elements */
.shimmer-image {
  width: 100%;
  height: 150px;
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite linear;
  border-radius: 12px;
}

.shimmer-title {
  width: 70%;
  height: 20px;
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite linear;
  border-radius: 4px;
}

.shimmer-location {
  width: 50%;
  height: 15px;
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite linear;
  border-radius: 4px;
}

.shimmer-rating {
  width: 40%;
  height: 15px;
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite linear;
  border-radius: 4px;
}

.shimmer-cuisines {
  width: 60%;
  height: 15px;
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite linear;
  border-radius: 4px;
}

.shimmer-cost {
  width: 50%;
  height: 15px;
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite linear;
  border-radius: 4px;
}

/* Shimmer for Search Section */
.shimmer-search-filter-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  padding: 2rem 0;
  align-items: center;
}

.shimmer-search-container {
  display: flex;
  gap: 1rem;
  width: 100%;
  max-width: 500px;
  justify-content: space-between;
  align-items: center;
}

/* Shimmer for Search Input */
.shimmer-search-input {
  width: 70%;
  height: 40px;
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite linear;
  border-radius: 25px;
}

/* Shimmer for Search Button */
.shimmer-search-btn {
  width: 25%;
  height: 40px;
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite linear;
  border-radius: 25px;
}

/* Shimmer for Filter Button */
.shimmer-filter-btn {
  width: 50%;
  height: 40px;
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite linear;
  border-radius: 25px;
  margin-top: 1rem;
}

/* Style for the login button */
.login-btn {
  padding: 6px 28px;
  background: linear-gradient(45deg, #ff6347, #ff4500);
  border-radius: 30px;
  color: white;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: none;
  cursor: pointer;
  outline: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.login-btn:hover {
  transform: scale(1.1); /* Slightly enlarge button */
  background: linear-gradient(45deg, #ff4500, #ff6347);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
}

.login-btn:active {
  transform: scale(0.98); /* Slightly shrink on click */
  background: linear-gradient(45deg, #ff4500, #ff6347);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.login-btn:focus {
  outline: none;
}

/* Online or Offline */

/* Container for the status */
.offline-status-container,
.online-status-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  text-align: center;
}

/* Status Indicator */
.status-indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 10px;
}

/* Online Status */
.status-indicator.online {
  background-color: #4caf50; /* Green color for online */
}

/* Offline Status */
.status-indicator.offline {
  background-color: #f44336; /* Red color for offline */
}

/* Text Styling */
.offline-status-container h1 {
  color: #f44336; /* Red text for offline */
  font-size: 1.5rem;
}

.online-status-container p {
  color: #4caf50; /* Green text for online */
  font-size: 1rem;
}

/* Responsive Design */
@media screen and (max-width: 1024px) {
  .restaurant-list {
    justify-content: center;
    padding: 2rem 1.5rem;
  }

  .card {
    width: 100%;
    max-width: 350px;
    margin: 0 auto;
  }

  .header {
    padding: 1rem;
  }

  .nav-items ul {
    gap: 1.5rem;
  }
}

@media screen and (max-width: 768px) {
  .restaurant-list {
    justify-content: center;
    padding: 2rem 1rem;
  }

  .card {
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }

  .header {
    padding: 1rem;
  }

  .nav-items ul {
    gap: 1rem;
  }

  .search-input {
    width: 100%;
    margin-bottom: 10px;
  }

  .search-btn {
    width: 100%;
    margin-top: 10px;
  }

  .filter-btn {
    width: 100%;
    margin-top: 10px;
  }

  .search-filter-container {
    flex-direction: column;
    align-items: stretch;
  }
}

@media screen and (max-width: 480px) {
  .restaurant-list {
    padding: 2rem 1rem;
  }

  .card {
    width: 100%;
    margin-bottom: 1.5rem;
  }

  .search-container {
    max-width: 100%;
    margin-bottom: 1rem; /* Reduced margin for better mobile display */
  }

  .search-input {
    width: 100%;
    padding: 12px;
    font-size: 0.95rem;
  }

  .search-btn {
    width: 100%;
    padding: 12px;
  }

  .filter-btn {
    width: 100%;
    padding: 12px;
  }
}
