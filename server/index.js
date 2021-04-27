const express = require('express');
const app = express();

const PORT = 3001;

app.listen(PORT, () => {
  console.info(`http://127.0.0.1:${PORT}`);
});