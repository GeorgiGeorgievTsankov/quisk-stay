import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useCabins } from "../../hooks/useCabins";
import "./CabinDetails.css";

const CabinDetails = () => {
  const { id } = useParams();
  const { getCabinById } = useCabins();
  const [cabin, setCabin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCabin = async () => {
      const cabinData = await getCabinById(id);
      setCabin(cabinData);
      setLoading(false);
    };

    fetchCabin();
  }, [id, getCabinById]);

  if (loading) {
    return <div className="loading">Loading cabin details...</div>;
  }

  if (!cabin) {
    return <div className="error">Cabin not found</div>;
  }

  return (
    <div className="cabin-details">
      <div className="cabin-header">
        <h1>{cabin.name}</h1>
        <p className="location">Location: Mountain View</p>
      </div>

      <div className="cabin-image">
        <img src={cabin.image} alt={cabin.name} />
      </div>

      <div className="cabin-info">
        <div className="info-section">
          <h2>Description</h2>
          <p>{cabin.description}</p>
        </div>

        <div className="details-grid">
          <div className="detail-item">
            <h3>Capacity</h3>
            <p>{cabin.maxCapacity} persons</p>
          </div>
          <div className="detail-item">
            <h3>Regular Price</h3>
            <p>${cabin.regularPrice}</p>
          </div>
          {cabin.discount > 0 && (
            <div className="detail-item">
              <h3>Discount</h3>
              <p className="discount">-${cabin.discount}</p>
            </div>
          )}
        </div>

        <div className="booking-section">
          <div className="final-price">
            <h3>Final Price</h3>
            <p>${cabin.regularPrice - cabin.discount}</p>
          </div>
          <div className="booking-buttons">
            <button className="book-button">Delete</button>
            <button className="book-button">Edit</button>
          </div>
        </div>

        <Link to="/cabins" className="back-link">
          ← Back to All Cabins
        </Link>
      </div>
    </div>
  );
};

export default CabinDetails;
