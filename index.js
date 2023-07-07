const express = require('express');
const subdomain = require('express-subdomain');

const app = express();

// Home page route
app.get('/', (req, res) => {
  res.send('Welcome to the Home page');
});

// Register page route
app.get('/register', (req, res) => {
  res.send('Register page');
});

// Login page route
app.get('/login', (req, res) => {
  res.send('Login page');
});

// Company subdomain route
const companyRouter = express.Router();
companyRouter.get('/', (req, res) => {
  res.send('Company page');
});
app.use(subdomain('my-comp', companyRouter));

// Blog subdomain route
const blogRouter = express.Router();
blogRouter.get('/', (req, res) => {
  res.send('Blog page');
});
app.use(subdomain('blog', blogRouter));

// Redirect to Login page for unauthorized access
app.get('*', (req, res) => {
  res.redirect('/login');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
