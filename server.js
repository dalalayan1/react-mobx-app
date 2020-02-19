const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const request = require('request');
const cookieParser = require('cookie-parser');
const log4js = require('log4js');
const logger = log4js.getLogger();
logger.level = process.env.LOG_LEVEL || 'debug';

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.urlencoded());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port);

logger.info('App is listening on port ' + port);
