
const express = require('express');
const bodyparser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
const app = express();
const accountSid = 'ACb82cf0bb4bbb7915d9a7d61718f7c93d';
const authToken = '00dac0911bc2e5cad93fa5b970b611f7';
const client = require('twilio')(accountSid, authToken);
app.set("view engine" ,'ejs');
app.use(bodyparser.urlencoded({extended:true}));
mongoose.connect("mongodb+srv://sem-ank_915:cmaklmn@cluster0-w8kvd.mongodb.net/celebrate",{
  useNewUrlParser: true,
  useUnifiedTopology: true
})
const DataSchema = new mongoose.Schema({
  date:String,
  type:String,
  name:String,
  insert:String
})

const Data =new mongoose.model("data",DataSchema);


setInterval(()=> {
  d = new Date();
  if(d.getHours()==00 && d.getMinutes()==00 && d.getSeconds()==00 )
  {var date;
  y = d.getFullYear()
  m = d.getMonth()+1
  da = d.getDate()

  if(m<10){
    m = "0"+m
  }
  if(da<10){
    da = "0"+da
  }
  date =(m)+"-"+da
  console.log(date);
Data.find({date:date},function(err,result) {
 console.log(result);
 if(result.length!=0){
   for (var i = 0; i < result.length; i++) {
     client.messages
    .create({
       body: result[i].type+' of '+result[i].name,
       from: 'whatsapp:+14155238886',
       to: 'whatsapp:+919835745940'
     })
    .then(message => console.log(message.sid))
    .done();
   }
 }
})}},1000)
app.get("/",function(req,res) {
  var date;
    d = new Date();
    y = d.getFullYear()
    m = d.getMonth()+1
    da = d.getDate()

    if(m<10){
      m = "0"+m
    }
    if(da<10){
      da = "0"+da
    }
    date =(m)+"-"+da
    console.log(date);
 Data.find({date:date},function(err,result) {
   console.log(result);
   if(result){

     res.render("show",{result:result})
   }
 })

})
app.post("/",function(req,res) {
  var date;
  if(req.body.date){
    date = req.body.date
  }
  else {
    d = new Date();
    date = d.getFullYear()+"-"+d.getMonth()+"-"+d.getDay()
  }

  date = date.substr(5,5)
  console.log(date);
 Data.find({date:date},function(err,result) {
   console.log(result);
   if(result){
     res.render("show",{result:result})
   }
 })
})

app.get("/insert",(req,res)=>{
  res.render("insert")
})

app.post("/insert",function(req,res){
  d = new Date();
  y = d.getFullYear()
  date = req.body.date;
  name = req.body.name;
  type = req.body.type;
  insert = req.body.date;
  date = date.replace((y+"-"),"")
  console.log(date);
  const data = new Data({
    date : date,
    type : type,
    name : name,
    insert:insert

  })
  data.save()
  res.redirect("/insert")
})




app.listen("3000",function(req,res) {
  console.log("START SERVER");
})
