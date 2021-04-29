const express = require('express');
const router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/', (req, res) => {
  console.log('get nasa!');
  axios.get('https://api.nasa.gov/planetary/apod?api_key=gZClpAd2dIP9dwXkbP5wMsqVMfT1ek5YMnEo7kep')
    .then(({data}) => {
      res.send(data);
    });
});

// console.log('whats the valu of router right here', router);
// router.listen(8000, () => {
// console.log('http://localhost:8000');
// });
module.exports = router;


