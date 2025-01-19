import { Link } from "react-router-dom";
import { useCabins } from "../../hooks/useCabins";
import "./CabinListing.css";


const CabinListing = () => {
  const { cabins, loading, error } = useCabins();
  

  const calculateDiscountPrice = (regularPrice, discount) => {
    return regularPrice - discount;
  };

  if (loading) {
    return <div className="loading">Loading cabins...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="cabin-listing">
      <h1>Our Cabins</h1>
      <div className="cabins-grid">
        {cabins.map((cabin) => (
          <div key={cabin.id} className="cabin-card">
            <img src={cabin.image} alt={cabin.name} />
            <div className="cabin-info">
              <h2>{cabin.name}</h2>
              <p className="capacity">
                Max capacity: {cabin.maxCapacity} persons
              </p>
              <p className="description">{cabin.description}</p>
              <div className="price-info">
                <p className="regular-price">
                  ${calculateDiscountPrice(cabin.regularPrice, cabin.discount)}
                  {cabin.discount > 0 && (
                    <span className="original-price">
                      ${cabin.regularPrice}
                    </span>
                  )}
                </p>
                {cabin.discount > 0 && (
                  <p className="discount">-${cabin.discount} discount!</p>
                )}
              </div>
              <Link to={`/cabins/${cabin.id}`} className="details-button">
                More Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CabinListing;
