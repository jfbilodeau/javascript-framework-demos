var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  const json = req.body;

  console.log(json)

  const name = json.name;
  const time = new Date().toISOString();
  const message = `Hello, ${name}. It is ${time}`;

  res.send({
    time,
    message
  });
});

module.exports = router;
