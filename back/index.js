require('dotenv').config();
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const morgan = require('morgan');
const moment = require('moment');
const session = require('express-session');
const bodyParser = require('body-parser');

const cookieParser = require('cookie-parser');

const app = express();

moment().format("HH:mm, MM-DD-YYYY");

app.use(bodyParser.json()); // => req.body convert the JSON of the req

// Setup CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', true);

  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');

  if (req.method === "OPTIONS") {
    return res.status(200).send("OK");
  };

  next();
});

app.use(cookieParser());

app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60,
    },
  }));

const router = require('./app/router');
const sanitizeMiddleware = require('./app/middlewares/sanitize');

const PORT = process.env.PORT || 5050;

// verify middleware user connected and send information to the views
const userMiddleware = require('./app/middlewares/user');
app.use( userMiddleware );


// logger
app.use(morgan('dev'));

//don't forget the middleware for req.body
app.use(express.urlencoded({extended: true}));
// add multer for the forms at format "multipart"
/*const bodyParser = multer();
app.use( bodyParser.none() );*/

// req.body exist (with urlencoded)
app.use( sanitizeMiddleware );

app.use(router);

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});