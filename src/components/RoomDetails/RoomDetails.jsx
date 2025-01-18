import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useRooms } from "../../hooks/useRooms";
import "./RoomDetails.css";

const RoomDetails = () => {
  const { id } = useParams();
  const { getRoomById } = useRooms();
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRoom = async () => {
      const roomData = await getRoomById(id);
      setRoom(roomData);
      setLoading(false);
    };

    fetchRoom();
  }, [id, getRoomById]);

  if (loading) {
    return <div className="loading">Loading room details...</div>;
  }

  if (!room) {
    return <div className="error">Room not found</div>;
  }

  return (
    <div className="room-details">
      <div className="image-gallery">
        {room.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${room.title} - view ${index + 1}`}
          />
        ))}
      </div>

      <div className="room-info">
        <h1>{room.title}</h1>
        <p className="location">{room.location}</p>
        <p className="description">{room.description}</p>

        <div className="details-grid">
          <div className="detail-item">
            <h3>Size</h3>
            <p>{room.size}</p>
          </div>
          <div className="detail-item">
            <h3>Capacity</h3>
            <p>{room.capacity}</p>
          </div>
          <div className="detail-item">
            <h3>Price</h3>
            <p className="price">${room.price} per night</p>
          </div>
        </div>

        <div className="amenities">
          <h2>Amenities</h2>
          <ul>
            {room.amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
        </div>

        <button className="book-button">Book Now</button>
        <Link to="/rooms" className="back-link">
          Back to All Rooms
        </Link>
      </div>
    </div>
  );
};

export default RoomDetails;
