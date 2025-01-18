import { Link } from "react-router-dom";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="hero-section">
        <h1>Welcome to Our Hotel</h1>
        <p>Discover the perfect place for your stay</p>
        <Link to="/rooms" className="cta-button">
          View Our Rooms
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
