// Dependencies
const express = require('express');
const path = require('node:path');
// require('dotenv').config(); // .env should be in root folder (project folder)
require('dotenv').config({ path: path.join(__dirname, 'config', '.env') });

// Initialize the application
const app = express();

// User data
const users = [
  { id: 1, fullName: 'John Doe', email: 'john@gmail.com' },
  { id: 2, fullName: 'Jane Doe', email: 'jane@gmail.com' },
  { id: 3, fullName: 'Sam Smith', email: 'sam@gmail.com' },
];

/*
app.get('/', (req, res) => {
  //   console.log(req.hostname);
  //   console.log(req.method);
  //   res.send('<h1>Home Page</h1>');
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
  //   console.log(req.hostname);
  //   console.log(req.method);
  //   res.send('<h1>Home Page</h1>');
  res.sendFile(path.join(__dirname, 'public', 'about.html'), err => {
    try {
      if (err) throw new Error('500 server error');
      console.log('success');
    } catch (err) {
      res.status(500).send('<h2>500 Server Error</h2>');
    }
  });
});
*/

// Define authorize middleware
const authorize = (req, res, next) => {
  const isAuth = false;
  if (isAuth) {
    next();
  } else {
    res.status(401).send('401 Not Authorized');
  }
};

// Middleware use
app.use(authorize);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/users', (req, res) => {
  res.json(users);
});

// Define the port
const port = process.env.PORT || 5000;

// listen to the port
app.listen(port, () => console.log(`Server is running on port ${port}`));
