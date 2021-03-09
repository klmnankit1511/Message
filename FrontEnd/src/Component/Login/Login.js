import React, { useState } from "react";
import Styles from "./Login.module.css";
import TextBox from "../../UI/TextBox/TextBox";

import { NavLink, useHistory } from "react-router-dom";
import axios from "axios";
import { Subscribe } from "unstated";
import Data from "../../Container/Data";

export default function Login(props) {
  const [e, setEmail] = useState(null); // for email validata or not check
  const [p, setPhone] = useState(null);
  const [ch,setCh] = useState(true)
    const [ch2,setCh2] = useState(true)
    const his = useHistory() // for number validate or not check

  

  var check = async (es,doLogin) => {
    es.preventDefault();
    var email = document.getElementById("email").value;
    checkemail(email);
    var pass = document.getElementById("password").value;
    if(e==null && p==null){

     setCh(false)
        if(ch==false){
      document.getElementById("button").style.cssText = 'color:yellow'
    }
        var postData={
            email:email,
            password:pass,
        }
         axios.post(props.check.state.apiUrl+'api/user/login',postData).then((res)=>{
          // console.log(res.data);
            if(res.status===200){
              // console.log(res,doLogin);
                var m = doLogin(res.data);
                if(m){
                  setCh2(false)
                  document.getElementById("button").style.cssText = 'color:green'
                  
                  his.push("/insert")
                }
            }
        })


    }
  };

  var checkemail = (data) => {
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        data
      )
    ) {
      setEmail(null);
    } else {
      setEmail("Invaild Email");
    }
  };

  

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
            <h2 className={Styles.name}>LOGIN</h2>
            <br></br>
            <form>
              <TextBox
              type="text"
                auto="email"
                name="email"
                id="email"
                autofocus={true}
                width="100%"
                placeholder="Email"
              />
              <TextBox
              type="password"
                auto="password"
                name="password"
                id="password"
                width="100%"
                placeholder="Password"
              />
              <Subscribe to={[Data]}>
                      {(data) => (
                        
                        <button
                        id="button"
                        onClick={(e) =>{
                            console.log(data)
                            check(e,data.doLogin)
                        }
                          }
                          type={p == null && e == null ? "submit" : "button"}
                          className={Styles.btnlogin}
                          
                        >
                          {ch?"SignUp":ch2?"Please Wait...":"Success"}
                        </button>
                      )}
                    </Subscribe>

              {/* <button
                onClick={check}
                
                className={Styles.btnlogin}
              >
                LOGIN
              </button> */}
              <br></br>
              <p style={{ color: "red", fontSize: "15px" }}>
                {" "}
                {e == null ? "" : e}
              </p>
              <p style={{ color: "red", fontSize: "15px" }}>
                {" "}
                {p == null ? "" : p}
              </p>
              <br></br>
              <p className={Styles.txtlogin}>
                <NavLink to="/signup">New User ? Create Account</NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
