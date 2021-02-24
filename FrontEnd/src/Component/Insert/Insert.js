import React,{useState} from "react"
import {NavLink} from "react-router-dom";
import Styles from "./Insert.module.css"
import TextBox from "../../UI/TextBox/TextBox"
import axios from "axios";
import {Subscribe} from "unstated";
import Data from "../../Container/Data";
import SelectBox from "../../UI/SelectBox/SelectBox";
// var [error,SetError] = useState("")



export default function Insert(props){
    // console.log(props);
    
var k;
var check = async (doLogin)=>{
    // console.log(k);
    var date = document.getElementById("date").value;
    var name = document.getElementById("name").value;
    var type = document.getElementById("type").value;
    var postData = {
        date:date,
        tid:props.check.state.tid,
        tsec:props.check.state.tsec,
        tphn:props.check.state.tphn,
        type:type,
        email:props.check.state.email,
        name:name,
        phone:props.check.state.phone,
    }
    axios.post(props.check.state.apiUrl+'api/insert',postData).then((res)=>{
        console.log(res);
    })
}
var checkData = (name,email,pass,phone,tphn,tid,tsec)=>{
    // Check Name 
    if(name.length<=3){
        setName("Name length should be > 3")
        return false
    }
    else{
        setName(null)
    }

    // Check Email
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
    {
        setEmail(null)
    }
    else{
        setEmail("Invaild Email")
        return false
    }

    // Check Password
    if(pass.length<9){
        setPass("Password length should be > 8")
        return false
    }
    else{
        setPass(null)
    }

    // Check Phone 
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(phone.match(phoneno)){
        setPhone(null)
    }
    else{
        setPhone("Invaild Phone No.")
        return false
    }

    // Check TPhn
    if(tphn.length>9){
        setTPhn(null)
    }
    else{
        setTPhn("Invaild Phone No.")
        return false
    }

    // Check Tid
    if(tid.length!=34){
        setTID("Invalid Twillo Id")
        return false
    }
    else{
        setTID(null)
    }

    // Check Tsec
    if(tsec.length!=32){
        setTSec("Invalid Twillo Secert")
        return false
    }
    else{
        setTSec(null)
    }
    return true;
}
var arr = ["Select","Marriage Anniversary","BirthDay","Anniversary"]

    return (
    <div className="container-fluid">
      <div className="row">
        <div className={`col-lg-12 ${Styles.back}`}>
          <div className={Styles.circle1}></div>
          <div className={Styles.circle2}></div>
        </div>
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
          <div className={Styles.box}>
            <br></br>
            <br></br>
            <h2 className={Styles.name}>INSERT EVENT</h2>
            <br></br>
            <form>
              <TextBox
                type="date"
                auto="date"
                name="date"
                id="date"
                autofocus="true"
                width="100%"
                placeholder="Select Date"
              />
              <TextBox
              type="text"
                auto="name"
                name="name"
                id="name"
                width="100%"
                placeholder="Enter Wisher Name"
              />
              <br></br>
              <SelectBox
              name="type"
              id="type"
              />
                <Subscribe to={[Data]}>
                      {(data) => (
                        <button
                        onClick={() =>
                            check(data.doLogin)
                          }
                          className={Styles.btnlogin}
                        >
                          ADD EVENT
                        </button>
                      )}
                    </Subscribe>




              <br></br>
              <br></br>
              <p className={Styles.txtlogin}>
                <NavLink to="/Login">Already User ? Login</NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
