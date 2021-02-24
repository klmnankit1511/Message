const router = require("express").Router();
const Data = require("../Model/Dataa");
// const Data = require('../Model/Data');
const Datee = require("../Model/Data");

router.get("/", (req, res) => {
  res.render("insert");
});

router.post("/", async (req, res) => {
  // Get Year
  d = new Date();
  y = d.getFullYear();

  // Assign Body Data
  date = req.body.date;
  name = req.body.name;
  type = req.body.type;
  insert = req.body.date;
  tid = req.body.tid;
  tphn = req.body.tphn;
  tsec = req.body.tsec;
  email = req.body.email;
  phone = req.body.phn;

  // Replacing Year from date
  date = date.replace(y + "-", "")
  // Assign Varible
  var k = "0"; // Check Whether data of save day exit or not variable
  var count = 1; 

  // Check Data is Exist or not of same day
  var D = await Datee.find({ _id: date }, (err, result) => {
    if (result.length != 0) {
      k = "1";
      count = result[0].count;
      return result;
    }
  });

  // If not exist Create new One
  if (k == "0") {
    const datee = new Datee({
      _id: date,
      count: 1,
      data: []
    });
    const dateee = await datee.save();
  }

  var id = "data" + count; // Creating Id for differnt Datas

  // Making Json of Data to inert in Data Array
  var formData = {
    id: id,
    tid: tid,
    tsec: tsec,
    tphn: tphn,
    phone: phone,
    email: email,
    insert: insert,
    date: date,
    name: name,
    type: type
  };

  count = count + 1;

  // Insert New Data into save day and update the count
  const Update = await Datee.updateOne(
    { _id: date },
    { $push: { data: formData }, $set: { count: count } },
    (err, result) => {
      if (result) {
        return result;
      } else {
        return err;
      }
    }
  );
});

module.exports = router;
