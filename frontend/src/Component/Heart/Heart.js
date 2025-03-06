import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Heart.css";
import { useNavigate } from "react-router-dom";

const Heart = () => {
  const [heartItems, setHeartItems] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    axios
      .get(`http://localhost:5000/api/heart?user_id=${userId}`)
      .then((response) => setHeartItems(response.data))
      .catch((error) => console.error("Error fetching Heart:", error));
  }, []);

  const removeItem = (id) => {
    axios
      .delete(`http://localhost:5000/api/heart/${id}`)
      .then(() => {
        setHeartItems(heartItems.filter((item) => item.id !== id));
      })
      .catch((error) => console.error("Error removing item:", error));
  };

  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/account");
  };

  return (
    <div className="heart-page">
      <div className="heart-card">
        <h2 className="heart-title">Your Favorite Books</h2>
        <button className="close-button" onClick={handleLogin}>
          ×
        </button>
        <hr />

        {heartItems.length === 0 ? (
          <p className="empty-heart">Your heart is empty. Add some books!</p>
        ) : (
          <div className="heart-items">
            {heartItems.map((item) => (
              <div key={item.id} className="heart-item">
                <img
                  src={item.image_url}
                  alt={item.title}
                  className="heart-item-image"
                />
                <div className="heart-item-details">
                  <p className="heart-item-name">{item.title}</p>
                  <p className="heart-item-price">Rs.{item.price}</p>
                </div>
                <button
                  className="remove-button"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Heart;
