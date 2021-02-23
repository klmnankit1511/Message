const router = require('express').Router();
const User = require('../Model/Data')

router.get("/event", (req, res) => {
  res.render("insert");
});

router.post("/event", async(req, res) =>{
  d = new Date();
  y = d.getFullYear();
  date = req.body.date;
  name = req.body.name;
  type = req.body.type;
  insert = req.body.date;
  date = date.replace(y + "-", "");
  console.log(date);
  const data = new User({
    date: date,
    type: type,
    name: name,
    insert: insert
  });
  const savedata = await data.save();
  res.send(savedata);
});

module.exports = router; 