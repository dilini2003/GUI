const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Initialize SQLite Database
const db = new sqlite3.Database('./database.sqlite', (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to SQLite database.');

    // Create users table
    db.run(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT UNIQUE,
        password TEXT
      )
    `);
// Create books table
db.run(`
  CREATE TABLE IF NOT EXISTS books (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    author TEXT NOT NULL,
    price REAL,
    originalprice REAL,
    image_url TEXT,
    category TEXT
  )
`, () => {
  console.log('Books table is ready.');
});
db.run(`
  CREATE TABLE IF NOT EXISTS cart (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    book_id INTEGER,
    quantity INTEGER,
    FOREIGN KEY (book_id) REFERENCES books (id)
  )
`, () => {
  console.log('Cart table is ready.');
});

db.run(`
  CREATE TABLE IF NOT EXISTS heart (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    book_id INTEGER,
    quantity INTEGER,
    FOREIGN KEY (book_id) REFERENCES books (id)
  )
`);
}
});

// API endpoint to get books
app.get('/books', (req, res) => {
  const query = 'SELECT * FROM books';
  db.all(query, [], (err, rows) => {
      if (err) {
          res.status(500).json({ error: err.message });
          return;
      }
      res.json(rows);
  });
});

// Add book to cart
app.post('/api/cart', (req, res) => {
  const { book_id, quantity } = req.body;

  const checkSql = `SELECT * FROM cart WHERE book_id = ?`;
  db.get(checkSql, [book_id], (err, row) => {
    if (err) {
      res.status(500).send({ error: 'Database error' });
      return;
    }
    if (row) {
      // Update quantity if book already exists
      const updateSql = `UPDATE cart SET quantity = quantity + ? WHERE book_id = ?`;
      db.run(updateSql, [quantity, book_id], function (err) {
        if (err) {
          res.status(500).send({ error: 'Error updating cart' });
        } else {
          res.send({ message: 'Cart updated successfully' });
        }
      });
    } else {
      // Insert new book in cart
      const insertSql = `INSERT INTO cart (book_id, quantity) VALUES (?, ?)`;
      db.run(insertSql, [book_id, quantity], function (err) {
        if (err) {
          res.status(500).send({ error: 'Error adding to cart' });
        } else {
          res.send({ message: 'Book added to cart' });
        }
      });
    }
  });
});

// Get cart items
app.get('/api/cart', (req, res) => {
  const query = `
    SELECT cart.id, books.title, books.price, books.image_url, cart.quantity 
    FROM cart 
    JOIN books ON cart.book_id = books.id
  `;
  db.all(query, [], (err, rows) => {
    if (err) {
      res.status(500).send({ error: 'Error fetching cart' });
    } else {
      res.json(rows);
    }
  });
});

// Update cart item quantity
app.put('/api/cart/:id', (req, res) => {
  const { quantity } = req.body;
  const cartId = req.params.id;

  const sql = `UPDATE cart SET quantity = ? WHERE id = ?`;
  db.run(sql, [quantity, cartId], function (err) {
    if (err) {
      res.status(500).send({ error: 'Error updating cart' });
    } else {
      res.send({ message: 'Cart updated successfully' });
    }
  });
});

// Remove item from cart
app.delete('/api/cart/:id', (req, res) => {
  const cartId = req.params.id;

  const sql = `DELETE FROM cart WHERE id = ?`;
  db.run(sql, [cartId], function (err) {
    if (err) {
      res.status(500).send({ error: 'Error removing item' });
    } else {
      res.send({ message: 'Item removed from cart' });
    }
  });
});
 

// ==================== User Authentication ====================
// Signup
app.post('/api/signup', (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).send({ error: 'All fields are required.' });
  }

  const sql = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`;
  db.run(sql, [name, email, password], function (err) {
    if (err) {
      console.error('Error registering user:', err.message);
      res.status(500).send({ error: 'Error registering user.' });
    } else {
      res.status(200).send({ message: 'User registered successfully!', id: this.lastID });
    }
  });
});

// Login
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({ error: 'Email and password are required.' });
  }

  const sql = `SELECT * FROM users WHERE email = ?`;
  db.get(sql, [email], (err, row) => {
    if (err) {
      console.error('Error logging in:', err.message);
      res.status(500).send({ error: 'Error logging in.' });
    } else if (row && row.password === password) {
      res.status(200).send({ message: 'Login successful!', userId: row.id });
    } else {
      res.status(400).send({ error: 'Invalid email or password.' });
    }
  });
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  const sql =  `SELECT id, password FROM users WHERE email = ?`;

  db.get(sql, [email], (err, row) => {
    if (err) {
      console.error('Error during login:', err.message);
      res.status(500).send({ error: 'Internal server error.' });
    } else if (row && row.password === password) {
      res.status(200).send({ message: 'Login successful!', id: row.id, userName: row.name }); // Include user ID in response
    } else {
      res.status(400).send({ error: 'Invalid email or password.' });
    }
  });
});

// ==================== User Profile Management ====================
// Get User Profile
app.get('/api/profile/:id', (req, res) => {
  const userId = req.params.id;

  const sql = `SELECT id, name, email FROM users WHERE id = ?`;
  db.get(sql, [userId], (err, row) => {
    if (err) {
      console.error('Error retrieving profile:', err.message);
      res.status(500).send({ error: 'Error retrieving profile.' });
    } else if (row) {
      res.status(200).send({ profile: row });
    } else {
      res.status(404).send({ error: 'User not found.' });
    }
  });
});

// Update User Profile
app.put('/api/update-profile/:id', (req, res) => {
  const userId = req.params.id;
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).send({ error: 'All fields are required.' });
  }

  const sql = `UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?`;
  db.run(sql, [name, email, password, userId], function (err) {
    if (err) {
      console.error('Error updating profile:', err.message);
      res.status(500).send({ error: 'Error updating profile.' });
    } else {
      res.status(200).send({ message: 'Profile updated successfully!' });
    }
  });
});

// Add book to Heart
app.post('/api/heart', (req, res) => {
  const { book_id, quantity } = req.body;

  const checkSql = `SELECT * FROM heart WHERE book_id = ?`;
  db.get(checkSql, [book_id], (err, row) => {
    if (err) {
      res.status(500).send({ error: 'Database error' });
      return;
    }
    if (row) {
      // Update quantity if book already exists
      const updateSql = `UPDATE heart SET quantity = quantity + ? WHERE book_id = ?`;
      db.run(updateSql, [quantity, book_id], function (err) {
        if (err) {
          res.status(500).send({ error: 'Error updating heart' });
        } else {
          res.send({ message: 'Already add book' });
        }
      });
    } else {
      // Insert new book in heart
      const insertSql = `INSERT INTO heart (book_id, quantity) VALUES (?, ?)`;
      db.run(insertSql, [book_id, quantity], function (err) {
        if (err) {
          res.status(500).send({ error: 'Error adding to heart' });
        } else {
          res.send({ message: 'Book added to heart' });
        }
      });
    }
  });
});

// Get heart items
app.get('/api/heart', (req, res) => {
  const query = `
    SELECT heart.id, books.title, books.price, books.image_url
    FROM heart 
    JOIN books ON heart.book_id = books.id
  `;
  db.all(query, [], (err, rows) => {
    if (err) {
      res.status(500).send({ error: 'Error fetching heart' });
    } else {
      res.json(rows);
    }
  });
});

// Update cart item quantity
app.put('/api/heart/:id', (req, res) => {
  const { quantity } = req.body;
  const heartId = req.params.id;

  const sql = `UPDATE heart SET quantity = ? WHERE id = ?`;
  db.run(sql, [quantity, heartId], function (err) {
    if (err) {
      res.status(500).send({ error: 'Error updating heart' });
    } else {
      res.send({ message: 'Cart updated successfully' });
    }
  });
});

// Remove item from cart
app.delete('/api/heart/:id', (req, res) => {
  const heartId = req.params.id;

  const sql = `DELETE FROM heart WHERE id = ?`;
  db.run(sql, [heartId], function (err) {
    if (err) {
      res.status(500).send({ error: 'Error removing item' });
    } else {
      res.send({ message: 'Item removed from heart' });
    }
  });
});
 


// ==================== Server Listener ====================
app.listen(port, 'localhost', () => {
  console.log(`Server is running at http://localhost:${port}`);
});