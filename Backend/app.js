const express = require('express');
const InsertRoute = require('./Routes/Insert');
const MainRoute = require('./Routes/Main');
const authRoute = require('./Routes/Auth');
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Dataa = require("./Model/Data");

dotenv.config();


mongoose.connect(process.env.DB,{useNewUrlParser: true,
    useUnifiedTopology: true},()=>{
      console.log("Connect");
    })


app.use(express.json());
app.use(cors());


app.use("/api/insert/",InsertRoute);
app.use("/api/main",MainRoute);
app.use("/api/user",authRoute);



app.listen("3006",()=>{
  console.log("Server Start");
})






















// const express = require("express");
// const bodyparser = require("body-parser");
// const ejs = require("ejs");
// const mongoose = require("mongoose");
// const app = express();
// const dotenv = require("dotenv")
// const cors = require("cors")
// dotenv.config();

const accountSid = process.env.accountSid;
const authToken = process.env.authToken;

const client = require("twilio")(accountSid, authToken);
// app.set("view engine", "ejs");
// app.use(bodyparser.urlencoded({ extended: true }));
// app.use(cors());
// mongoose.connect(
//   process.env.DB,
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   }
// );
// const DataSchema = new mongoose.Schema({
//   date: String,
//   type: String,
//   name: String,
//   insert: String
// });

// const Data = new mongoose.model("data", DataSchema);

setInterval(() => {
  d = new Date();
  if (d.getHours() == 00 && d.getMinutes() == 00 && d.getSeconds() == 00) {
    var date;
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
    console.log(result);
    if(result.length!=0){
      var arr=[];
        for (var i=0;i<result[0].data.length;i+=2){
            arr.push(result[0].data[i])
        }
        for (var i = 0; i < arr.length; i++) {
          client.messages
            .create({
              body: arr[i].type + " of " + arr[i].name,
              from: "whatsapp:+14155238886",
              to: "whatsapp:+916206114473"
            })
            .then((message) => console.log(message.sid))
            .done();
        }

    }
    
  });


  }
}, 1000);

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
    console.log(result);
    if(result.length!=0){
      var arr=[];
        for (var i=0;i<result[0].data.length;i+=2){
            arr.push(result[0].data[i])
        }
        for (var i = 0; i < arr.length; i++) {
          client.messages
            .create({
              body: arr[i].type + " of " + arr[i].name,
              from: "whatsapp:+14155238886",
              to: "whatsapp:+916206114473"
            })
            .then((message) => console.log(message.sid))
            .done();
        }

    }
    
  });













// app.get("/", function (req, res) {
//   var date;
//   d = new Date();
//   y = d.getFullYear();
//   m = d.getMonth() + 1;
//   da = d.getDate();

//   if (m < 10) {
//     m = "0" + m;
//   }
//   if (da < 10) {
//     da = "0" + da;
//   }
//   date = m + "-" + da;
//   console.log(date);
//   Data.find({ date: date }, function (err, result) {
//     console.log(result);
//     // res.json(result)
//     if (result) {
//       res.render("show", { result: result });
//     }
//   });
// });
// app.post("/", function (req, res) {
//   var date;
//   if (req.body.date) {
//     date = req.body.date;
//   } else {
//     d = new Date();
//     date = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDay();
//   }

//   date = date.substr(5, 5);
//   console.log(date);
//   Data.find({ date: date }, function (err, result) {
//     console.log(result);
//     if (result) {
//       res.render("show", { result: result });
//     }
//   });
// });

// app.get("/insert", (req, res) => {
//   res.render("insert");
// });

// app.post("/insert", function (req, res) {
//   d = new Date();
//   y = d.getFullYear();
//   date = req.body.date;
//   name = req.body.name;
//   type = req.body.type;
//   insert = req.body.date;
//   date = date.replace(y + "-", "");
//   console.log(date);
//   const data = new Data({
//     date: date,
//     type: type,
//     name: name,
//     insert: insert
//   });
//   data.save();
//   res.redirect("/insert");
// });




// app.listen("3002", function (req, res) {
//   console.log("START SERVER");
// });
