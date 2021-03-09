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

// Get WhatsAPP Message

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
          const accountSid = arr[i].tid;
const authToken = arr[i].tsec;

const client = require("twilio")(accountSid, authToken);
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















