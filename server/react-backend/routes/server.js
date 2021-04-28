const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.listen(8000, () => {
  console.log('http://localhost:8000');
})
module.exports = router;
