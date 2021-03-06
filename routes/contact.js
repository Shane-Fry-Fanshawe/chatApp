const express = require('express');
//Need to use the router that comes with express
const router = express.Router();
const path = require('path');


//Use router.get to use its software

router.get('/contact', (req, res) => { //This is a route, it is where the user navigates to our web page, in this case the home page/root
  res.sendFile(path.resolve(__dirname, '../views/contact.html'))
});

module.exports = router;
