const express = require('express');
const app = express();

app.get('/', (req, res) => { //This is a route, it is where the user navigates to our web page, in this case the home page/root
  res.sendFile(__dirname + '/index.html');
});

app.get('/contact', (req, res) => { //This is a contact page route
  res.sendFile(__dirname + '/contact.html');
});

app.get('/portfolio', (req, res) => { //This is a portfolio page route
  res.sendFile(__dirname + '/portfolio.html');
});

app.listen(3000, () => {
  console.log('app running on port 3000!');
});
