import '../pages/About.css'

const About = () => {
  return (
    <div className="about-container">
      

      <section className="about-section">
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            Welcome to Foodie Express, your ultimate food delivery companion! We bring the best
            restaurants, cafes, and eateries right to your doorstep. Whether you're craving a
            delicious pizza, a refreshing salad, or a sweet dessert, we’ve got you covered.
          </p>
          <p>
            Our mission is to offer fast, reliable, and convenient food delivery services. With a
            simple, user-friendly interface and top-notch customer service, we aim to make your food
            delivery experience as seamless and enjoyable as possible.
          </p>
          <h3>Why Choose Us?</h3>
          <ul>
            <li>Wide variety of food options from top restaurants</li>
            <li>Fast and reliable delivery service</li>
            <li>Easy and secure online ordering</li>
            <li>Exclusive offers and discounts</li>
          </ul>
        </div>

        <div className="about-image">
          <img src="https://via.placeholder.com/500x300" alt="Food Delivery" />
        </div>
      </section>

      
    </div>
  );
};

export default About;
