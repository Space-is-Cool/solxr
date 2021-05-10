#!/usr/bin/env node

const app = require('./app');
require('dotenv').config();
const { emailBlast } = require('./routes/email');

emailBlast(process.env.GMAIL_ACC, process.env.GMAIL_PASS);



const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
