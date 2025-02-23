import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './Eye.css';

const Eye = () => {
  const { bookId } = useParams(); // Get book ID from URL
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/books/${bookId}`)
      .then((response) => {
        setBook(response.data);
      })
      .catch((error) => console.error("Error fetching book details:", error));
  }, [bookId]);

  if (!book) {
    return <p>Loading book details...</p>;
  }

  return (
    <div className="eye-card">
      <div className="eye-card-content">
        <img src={book.image_url} alt={book.title} className="book-image" />
        <div className="book-details">
          <h2>{book.title}</h2>
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Category:</strong> {book.category}</p>
          <p><strong>Price:</strong> Rs.{book.price}</p>
          <p><strong>Original Price:</strong> <s>Rs.{book.originalprice}</s></p>
        </div>
      </div>
    </div>
  );
};

export default Eye;
