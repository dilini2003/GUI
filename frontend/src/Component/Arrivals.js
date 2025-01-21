import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaEye, FaHeart } from "react-icons/fa";

const categories = [
  { id: "new", label: "New Arrivals", color: "pink" },
  { id: "children", label: "Children's Books", color: "green" },
  { id: "educational", label: "Educational Books", color: "orange" },
  { id: "fiction", label: "Fiction", color: "blue" },
  { id: "fantasy", label: "Fantasy", color: "purple" },
  { id: "biography", label: "Biography", color: "brown" },
];

const Arrivals = () => {
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("new");

  useEffect(() => {
    axios
      .get("http://localhost:5000/books")
      .then((response) => setBooks(response.data))
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

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
  
  return (
    <div>
      <section className="categories" id ="Arrivals" >
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

      <section className="arrivals" >
        <div className="heading">
          <span>{categories.find((cat) => cat.id === selectedCategory)?.label}</span>
        </div>
        <div className="grid">
          {filterBooksByCategory().map((book) => (
            <div className="box" key={book.id}>
              <div className="image">
                <img src={book.image_url} alt={book.title} />
                <div className="hover-icons">
          <a href="#z"><FaHeart/></a>
          <a href="#s"><FaEye/></a>
        </div>
              </div>
              <div className="content">
                <h3>{book.title}</h3>
                <div className="price">
                  Rs.{book.price} <span>Rs.{book.originalprice}</span>
                </div>
                <button className="btn">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="deal">
        <div className="content">
          <h3>📚Deal of the Day</h3>
          <h1>Up to 50% Off!🎉</h1>
          <p>
          Discover amazing deals on your favorite books with our Deal of the Day! Enjoy discounts of up to 50% on bestsellers. Don't miss out—grab your next great read at an unbeatable price today!
          </p>
          <a href="#Arrivals" className="btn">
            shop now
          </a>
        </div>
        <div className="image">
          <img src="images/deal.jpg" alt="" />
        </div>
      </section>
    </div>
  );
};

export default Arrivals;
