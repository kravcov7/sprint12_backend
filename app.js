/* eslint-disable eol-last */
const express = require('express');
const { PORT = 3000 } = process.env;
const path = require('path');
const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/users', usersRouter);
app.use('/cards', cardsRouter);

app.listen(PORT);