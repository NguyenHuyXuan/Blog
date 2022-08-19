const express = require('express');
var path = require('path');
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const app = express();
const port = 3000;    // default port

// HTTP logger
app.use(morgan('combined'));

// Templates engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs'  // file extension
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening at  http://localhost:${port}`); // listen on port 3000
})