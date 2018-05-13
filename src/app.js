const express = require('express');
const path = require('path');
const logger = require('morgan');
const debug = require('debug')('src:server');

const indexRouter = require('./routes/index');

const app = express();
const http = require('http');
const port = process.env.PORT || '3000';

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);

app.set('port', port);

const server = http.createServer(app);
server.listen(port);
