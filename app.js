const express = require('express');
const mysql = require('mysql');

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: 'mysql-container', // Name of the MySQL container (defined in docker-compose)
  user: 'root',
  password: 'my-secret-pw',
  database: 'myappdb'
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database.');
});

// Set up an Express server
const app = express();
const port = 7080;

app.get('/', (req, res) => {
  res.send('Hello, this is my web application!');
});

app.listen(port, () => {
  console.log(`Web app is running on http://localhost:${port}`);
});

