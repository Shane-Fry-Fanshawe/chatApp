const express = require('express');
const app = express();


app.use(express.static('public'));


//This is to get express to use the routers file we made in index (Set up Routes)
app.use(require('./routes/index'));
app.use(require('./routes/contact'));
app.use(require('./routes/users'));



app.listen(3000, () => {
  console.log('app running on port 3000!');
});
