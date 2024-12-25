// Login Form Handling
const loginForm = document.querySelector('#login form');

if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = loginForm.querySelector('input[name="email"]').value;
        const password = loginForm.querySelector('input[name="password"]').value;

        alert(`Logging in with email: ${email}`);
        // Add logic for server-side authentication here
        // Import required modules
const express = require('express');
const bcrypt = require('bcryptjs');
const session = require('express-session');

const app = express();

// Mock database (you can replace this with a real DB)
const users = [
  { username: 'user1', passwordHash: bcrypt.hashSync('password123', 10) },
  { username: 'user2', passwordHash: bcrypt.hashSync('mypassword', 10) }
];

// Middleware for parsing form data
app.use(express.urlencoded({ extended: true }));

// Session configuration
app.use(session({
  secret: 'your-secret-key', 
  resave: false, 
  saveUninitialized: true
}));

// Serve the login form (GET request)
app.get('/', (req, res) => {
  res.send(`
    <form action="/login" method="POST">
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" required>
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required>
      <button type="submit">Login</button>
    </form>
  `);
});

// Login route (POST request)
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  // Find user in the "database"
  const user = users.find(u => u.username === username);
  
  if (user) {
    // Compare the hashed password with the entered password
    bcrypt.compare(password, user.passwordHash, (err, result) => {
      if (result) {
        // Successful login, create a session
        req.session.user = user;
        res.redirect('/dashboard');
      } else {
        // Invalid credentials
        res.status(401).send('Invalid credentials');
      }
    });
  } else {
    res.status(401).send('Invalid credentials');
  }
});

// Protected route (dashboard)
app.get('/dashboard', (req, res) => {
  if (req.session.user) {
    res.send(`Welcome, ${req.session.user.username}!`);
  } else {
    res.status(401).send('Please log in first');
  }
});

// Logout route
app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send('Failed to log out');
    }
    res.redirect('/');
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

    });
}
