const router = require("express").Router();
const Dataa = require("../Model/Data");
const jwt_decode = require("jwt-decode")
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

  Dataa.find({ _id: date }, function (err, result) {
    console.log(result[0].data[0]);
    res.send(result[0].data);
  });
});

router.post("/", function (req, res) {


  token = req.body.token;
  var decode = jwt_decode(token)
  console.log(decode.email);
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

  Dataa.find({ _id: date}, function (err, result) {
    console.log(result[0].data.length,45);
    // console.log(result);
    if(result.length!=0){
      console.log(result[0]);
      var arr = result[0].data.filter((da)=>{
        return da.email.includes(decode.email);
      })
      console.log(arr);
      res.send(arr);
    }
    else if(result.length==0){
      res.status(300).send("No Event's Today")
    }
    else{
      res.send("No Found")
    }
  });



  // var date;
  // if (req.body.date) {
  //   date = req.body.date;
  // } else {
  //   d = new Date();
  //   date = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDay();
  // }

  // date = date.substr(5, 5);
  // console.log(date);
  // Data.find({ date: date }, function (err, result) {
  //   console.log(result);
  //   res.send(result);
  // });
});

module.exports = router;
