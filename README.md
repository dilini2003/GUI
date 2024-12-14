# Online Book Store

![Online Book Store](https://img.shields.io/badge/project-online%20book%20store-blue?style=for-the-badge) ![Technologies](https://img.shields.io/badge/tech-stack-green?style=for-the-badge)

Welcome to the **Online Book Store** project! This dual-interface application provides a seamless experience for users to browse, search, and purchase books online while allowing administrators to manage inventory through a dedicated desktop application.

---

## 🌟 Features

### Web Application (Customer Interface)
- **Browse and Search** books with dynamic filters.
- **User Authentication**: Secure login and signup.
- **Shopping Cart**: Add/remove items with real-time updates.
- **Checkout**: Complete purchases with form validation.
- Built with **React.js**, **HTML**, **CSS**, and **JavaScript**.
- Backend communication via **REST API**.

### Desktop Application (Admin Interface)
- **Manage Inventory**: Perform CRUD operations on books.
- **Track Orders**: View and update order statuses.
- Developed in **C#** with a clean and intuitive UI.

---

## 🛠️ Tech Stack

| Component               | Technology                      |
|-------------------------|----------------------------------|
| Frontend (Web)          | React.js, HTML, CSS, JavaScript |
| Backend                | REST API                        |
| Desktop Application     | C#                              |
| Database                | MySQL or SQLite                |

---

## 📂 Folder Structure

```
.
├── client/                  # Web application code
├── server/                  # REST API code
├── admin/                   # Desktop application code
├── database/                # SQL scripts
├── README.md                # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
Ensure you have the following installed on your system:
- Node.js and npm
- Visual Studio (for C# development)
- MySQL or SQLite database server

### Installation

#### 1. Clone the repository
```bash
git clone https://github.com/your-username/online-book-store.git
cd online-book-store
```

#### 2. Install dependencies for the web application
```bash
cd client
npm install
```

#### 3. Start the web application
```bash
npm start
```

#### 4. Configure and run the server
```bash
cd server
npm install
npm run start
```

#### 5. Run the desktop application
Open the `admin/` folder in Visual Studio and run the project.

---

## 📊 Database Schema

| Table Name    | Description             |
|---------------|-------------------------|
| `users`       | Stores user details     |
| `books`       | Stores book inventory   |
| `orders`      | Tracks customer orders  |

---

## 📄 API Endpoints

| Endpoint             | Method   | Description            |
|----------------------|----------|------------------------|
| `/api/books`         | GET      | Get all books          |
| `/api/books/:id`     | GET      | Get book by ID         |
| `/api/orders`        | POST     | Create a new order     |
| `/api/orders/:id`    | PUT      | Update an order status |

---

## 🤝 Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add feature-name'`.
4. Push to the branch: `git push origin feature-name`.
5. Create a pull request.

---

## 🛡️ License

This project is licensed under the [MIT License](LICENSE).

---

### 🌟 Thank you for contributing to the Online Book Store project!

