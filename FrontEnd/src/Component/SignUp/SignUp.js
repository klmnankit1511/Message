import React,{useState} from "react"
import {NavLink,withRouter,Link,useHistory} from "react-router-dom";
import Styles from "./SignUp.module.css"
import TextBox from "../../UI/TextBox/TextBox"
import axios from "axios";
import {Subscribe} from "unstated";
import Data from "../../Container/Data";
// var [error,SetError] = useState("")



export default function SignUp(props){
    const [nm,setName] = useState(null); 
    const [e,setEmail] = useState(null); // for email validata or not check
    const [p,setPass] = useState(null); // for number validate or not check
    const [ph,setPhone] = useState(null);
    const [tphn,setTPhn] = useState(null);
    const [tid,setTID] = useState(null);
    const [tsec,setTSec] = useState(null); 
    const [ch,setCh] = useState(true)
    const [ch2,setCh2] = useState(true)
    const his = useHistory();
    
var k;
var check = async (doLogin)=>{
  
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    var phone = document.getElementById("phone").value;
    var tphn = document.getElementById("tphn").value;
    var tid = document.getElementById("tid").value;
    var tsec = document.getElementById("tsec").value;
    
    k = await checkData(name,email,pass,phone,tphn,tid,tsec);
    if(k){
        setCh(false)
        if(ch==false){
      document.getElementById("button").style.cssText = 'color:yellow'
    }
        var postData={
            name:name,
            email:email,
            password:pass,
            phone:phone,
            tphn:tphn,
            tid:tid,
            tsec:tsec
        }
        await axios.post(props.check.state.apiUrl+'api/user/resister',postData).then((res)=>{
          console.log(res);
            if(res.status===200){
              // console.log(res,doLogin);
                doLogin(res.data.data);
                setCh2(false)
                document.getElementById("button").style.cssText = 'color:green'
                his.push("/insert")

                //console.log(doLogin);


            }
        })
    }


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
            <h2 className={Styles.name}>SIGNUP</h2>
            <br></br>
            <form>
              <TextBox
                type="text"
                auto="name"
                name="name"
                id="name"
                autofocus={true}
                width="100%"
                placeholder="Enter Name"
              />
              <TextBox
              type="text"
                auto="email"
                name="email"
                id="email"
                width="100%"
                placeholder="Email"
              />
              <TextBox
              type="password"
                auto="password"
                name="password"
                id="password"
                width="100%"
                type="password"
                placeholder="Password"
              />
              <TextBox
                type="text"
                auto="phone"
                name="phone"
                id="phone"
                width="100%"
                placeholder="Phone No."
              />
              <TextBox
                type="text"
                auto="tphn"
                name="tphn"
                id="tphn"
                width="100%"
                placeholder="Twillo Phone No."
              />
              <TextBox
                type="password"
                auto="tid"
                name="tid"
                id="tid"
                width="100%"
                placeholder="Twillo Id"
              />
              <TextBox
                type="password"
                auto="tsec"
                name="tsec"
                id="tsec"
                width="100%"
                placeholder="Twillo Secert"
              />
                <Subscribe to={[Data]}>
                      {(data) => (
                        
                        <button
                        id="button"
                        onClick={() =>{
                            console.log(data)
                            check(data.doLogin)
                        }
                          }
                          type={k? "submit" : "button"}
                          className={Styles.btnlogin}
                          
                        >
                          {ch?"SignUp":ch2?"Please Wait...":"Success"}
                        </button>
                      )}
                    </Subscribe>
              <br></br>
              {/* Error Display */}
              <p style={{ color: "white", fontSize: "15px" ,marginLeft:"70px"}}>
                {" "}
                <h6>{nm}</h6>
                <h6>{e}</h6>
                <h6>{p}</h6>
                <h6>{ph}</h6>
                <h6>{tphn}</h6>
                <h6>{tid}</h6>
                <h6>{tsec}</h6>
              </p>
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
