const router = require("express").Router();
const User = require("../Model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { ResisterValidation, LoginValidation } = require("../Validate");

router.post("/resister", async (req, res) => {
  // console.log(req.body);
  const { error } = ResisterValidation(req.body);
  if (error){
    console.log(error.details[0].message);
  return res.status(202).send(error.details[0].message);
  }
    

  const existemail = await User.findOne({
    email: req.body.email
  });
  if (existemail) return res.status(400).send("Email Exist");

  // Hash Passwood
  const salt = await bcrypt.genSalt(8);
  const hashpass = await bcrypt.hash(req.body.password, salt);
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashpass,
    phone: req.body.phone,
    tphn:req.body.tphn,
    tid:req.body.tid,
    tsec:req.body.tsec

  });
  try {
    const savedUser = await user.save();

    const token = jwt.sign(
    {
      email: user.email,
      phone: user.phone,
      tphn:user.tphn,
      tid:user.tid,
      tsec:user.tsec

    },
    process.env.Token_secret
  );
  // res.send(token);
  // res.header("auth-token", token).send(token);
  var sendData = {
    data:{
      savedUser,
      accessToken:token
    }
  }
    res.send(sendData);
  } catch (err) {
    res.status(400).send(err);
  }
});



router.post("/login", async (req, res) => {
  const { error } = LoginValidation(req.body);
  if (error) return res.status(202).send(error.details[0].message);

  const user = await User.findOne({
    email: req.body.email
  });
  if (!user) return res.status(400).send("Creandatills is not write");

  // Password Check
  const pass = await bcrypt.compare(req.body.password, user.password);
  if (!pass) return res.status(400).send("Wrong Password");

  const accessToken = jwt.sign(
    {
      email: user.email,
      phone: user.phone,
      tphn:user.tphn,
      tid:user.tid,
      tsec:user.tsec

    },
    process.env.Token_secret
  );
  var savedUser = user;
  var sendData = {
    savedUser,
    accessToken
  }
  // console.log(sendData);
  res.send(sendData);
});

module.exports = router;
