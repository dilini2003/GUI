import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Arrivals.css";
import { FaEye, FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Eye from "../Eye/Eye";
import { Snackbar, Alert } from "@mui/material";

const categories = [
  { id: "new", label: "New Arrivals", color: "pink" },
  { id: "children", label: "Children's Books", color: "green" },
  { id: "educational", label: "Educational Books", color: "orange" },
  { id: "fiction", label: "Fiction", color: "blue" },
  { id: "fantasy", label: "Fantasy", color: "purple" },
  { id: "biography", label: "Biography", color: "brown" },
];

const Arrivals = ({ isLoggedIn }) => {
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("new");
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("success");

  useEffect(() => {
    axios
      .get("http://localhost:5000/books")
      .then((response) => setBooks(response.data))
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  const [selectedBook, setSelectedBook] = useState(null);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addToCart = (bookId) => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      const userId = localStorage.getItem("userId");
      axios
        .post("http://localhost:5000/api/cart", {
          book_id: bookId,
          quantity: 1,
          user_id: userId,
        })
        .then((response) => {
          setMessage("Book added to cart successfully!");
          setSeverity("success");
          setOpen(true);
        })
        .catch((error) => {
          setMessage("Error adding book to cart.");
          setSeverity("error");
          setOpen(true); // Show error notification
          console.error("Error adding to cart:", error);
        });
    }
  };
  const addToHeart = (bookId) => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      const userId = localStorage.getItem("userId");
      axios
        .post("http://localhost:5000/api/heart", {
          book_id: bookId,
          quantity: 1,
          user_id: userId,
        })
        .then((response) => {
          setMessage("Book added to favorites!");
          setSeverity("success");
          setOpen(true);
        })
        .catch((error) => {
          setMessage("Error adding book to favorites.");
          setSeverity("error");
          setOpen(true); // Show error notification
          console.error("Error adding to heart:", error);
        });
    }
  };
  const viewBookDetails = (book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const filterBooksByCategory = () => {
    switch (selectedCategory) {
      case "new":
        return books.filter((book) => book.category === "New Arrivals");
      case "children":
        return books.filter((book) => book.category === "Children's Books");
      case "educational":
        return books.filter((book) => book.category === "Educational Books");
      case "fiction":
        return books.filter((book) => book.category === "Fiction");
      case "fantasy":
        return books.filter((book) => book.category === "Fantasy");
      case "biography":
        return books.filter((book) => book.category === "Biography");
      default:
        return [];
    }
  };

  const handleCloseSnackbar = () => {
    setOpen(false);
  };

  return (
    <div>
      <section className="categories" id="Arrivals">
        <div className="category-buttons">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-button ${category.color}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
      </section>

      <section className="arrivals">
        <div className="heading">
          <span>
            {categories.find((cat) => cat.id === selectedCategory)?.label}
          </span>
        </div>
        <div className="grid">
          {filterBooksByCategory().map((book) => (
            <div className="box" key={book.id}>
              <div className="image">
                <img src={book.image_url} alt={book.title} />
                <div className="hover-icons">
                  <a onClick={() => addToHeart(book.id)}>
                    <FaHeart />
                  </a>
                  <a onClick={() => viewBookDetails(book)}>
                    <FaEye />
                  </a>
                </div>
              </div>
              <div className="content">
                <h3>{book.title}</h3>
                <div className="price">
                  Rs.{book.price} <span>Rs.{book.originalprice}</span>
                </div>
                <button onClick={() => addToCart(book.id)} className="btn">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      {isModalOpen && <Eye book={selectedBook} onClose={closeModal} />}

      <section className="deal">
        <div className="content">
          <h3>📚Deal of the Day</h3>
          <h1>Up to 50% Off!🎉</h1>
          <p>
            Discover amazing deals on your favorite books with our Deal of the
            Day! Enjoy discounts of up to 50% on bestsellers. Don't miss
            out—grab your next great read at an unbeatable price today!
          </p>
          <a href="#Arrivals" className="btn">
            shop now
          </a>
        </div>
        <div className="image">
          <img src="images/deal.jpg" alt="" />
        </div>
      </section>

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={severity}
          className="custom-alert" // Apply custom styles here
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Arrivals;
