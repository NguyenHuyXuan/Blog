const express = require('express');
var path = require('path');
const handlebars = require('express-handlebars');
const morgan = require('morgan');

const db = require('./config/db');

// Connect DB
db.connect();

const app = express();
// default port
const port = 3000;    

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
// HTTP logger
app.use(morgan('combined'));

// Templates engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs'  // file extension
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));

// routes init
route(app);

// listen on port 3000
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`); 
})