const router = require("express").Router();
const Data = require("../Model/Data");

router.get("/", function (req, res) {
  var date;
  d = new Date();
  y = d.getFullYear();
  m = d.getMonth() + 1;
  da = d.getDate();

  if (m < 10) {
    m = "0" + m;
  }
  if (da < 10) {
    da = "0" + da;
  }
  date = m + "-" + da;
  console.log(date);
  Data.find({ date: date }, function (err, result) {
    console.log(result);
    // res.json(result)
    res.send(result);
  });
});

router.post("/", function (req, res) {
  var date;
  if (req.body.date) {
    date = req.body.date;
  } else {
    d = new Date();
    date = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDay();
  }

  date = date.substr(5, 5);
  console.log(date);
  Data.find({ date: date }, function (err, result) {
    console.log(result);
    res.send(result);
  });
});

module.exports = router;
