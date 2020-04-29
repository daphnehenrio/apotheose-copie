require('dotenv').config();
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const morgan = require('morgan');
const moment = require('moment');
const session = require('express-session');

const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
      // secure: true
    },
  }));

const router = require('./app/router');
const sanitizeMiddleware = require('./app/middleware/sanitize');

const PORT = process.env.PORT || 5050;

// logger
app.use(morgan('dev'));

// Mise en place CORS
app.use(cors());

// on oublie pas le middleware pour le req.body
app.use(express.urlencoded({extended: true}));
// on rajoute multer pour les formulaires au format "multipart"
const bodyParser = multer();
app.use( bodyParser.none() );

// ici, req.body existe déjà (grace à urlencoded), et on veut l'assinir AVANT de le passer au router
app.use( sanitizeMiddleware );

// on met en place le front, en une ligne !
app.use(express.static('public'));

app.use(router);

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});