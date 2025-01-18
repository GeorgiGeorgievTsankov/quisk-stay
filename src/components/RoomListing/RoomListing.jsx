import { Link } from "react-router-dom";
import { useRooms } from "../../hooks/useRooms";
import "./RoomListing.css";

const RoomListing = () => {
  const { rooms, loading, error } = useRooms();

  if (loading) {
    return <div className="loading">Loading rooms...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="room-listing">
      <h1>Our Rooms</h1>
      <div className="rooms-grid">
        {rooms.map((room) => (
          <div key={room.id} className="room-card">
            <img src={room.image_url} alt={room.title} />
            <div className="room-info">
              <h2>{room.title}</h2>
              <p className="location">{room.location}</p>
              <p className="description">{room.description}</p>
              <p className="price">${room.price} per night</p>
              <Link to={`/rooms/${room.id}`} className="details-button">
                More Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomListing;
