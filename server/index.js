#!/usr/bin/env node

const app = require('./app');
require('dotenv').config();
const { emailBlast } = require('./routes/email');

emailBlast(process.env.GMAIL_ACC, process.env.GMAIL_PASS);




// emailBlast;


// const debug = require('debug')('react-backend:server');
// const http = require('http');

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
