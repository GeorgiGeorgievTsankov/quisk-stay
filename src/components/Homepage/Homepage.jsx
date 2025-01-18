import { Link } from "react-router-dom";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="hero-section">
        <h1>Welcome to Mountain Cabins</h1>
        <p>Discover your perfect mountain getaway</p>
        <Link to="/cabins" className="cta-button">
          View Our Cabins
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
