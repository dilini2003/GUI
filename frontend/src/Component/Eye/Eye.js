import React from "react";
import "./Eye.css";

const Eye = ({ book, onClose }) => {
  if (!book) return null;

  return (
    <div className="eye-card">
      <div className="eye-card-content">
        <button className="close-button" onClick={onClose}>
          ×
        </button>

        <h1>{book.title}</h1>
        <img src={book.image_url} alt={book.title} className="book-image" />
        <div className="book-details">
          <p>
            <strong>Author:</strong> {book.author}
          </p>
          <p>
            <strong>Price:</strong> Rs.{book.price}
          </p>
          <p>
            <strong>Original Price:</strong> <s>Rs.{book.originalprice}</s>
          </p>
          <p>
            <strong>Category:</strong> {book.category}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Eye;
