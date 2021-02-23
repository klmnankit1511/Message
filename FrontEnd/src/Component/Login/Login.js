import React, { useState } from "react";
import Styles from "./Login.module.css";
import TextBox from "../../UI/TextBox/TextBox";

import { NavLink } from "react-router-dom";

export default function Login() {
  const [e, setEmail] = useState(null); // for email validata or not check
  const [p, setPhone] = useState(null); // for number validate or not check

  

  var check = () => {
    var email = document.getElementById("email").value;
    checkemail(email);
    var phone = document.getElementById("phone").value;
    checkphone(phone);
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

  var checkphone = (data) => {
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (data.match(phoneno)) {
      setPhone(null);
    } else {
      setPhone("Invaild Phone No.");
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
                autofocus="false"
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
              <button
                onClick={check}
                type={p == null && e == null ? "submit" : "button"}
                className={Styles.btnlogin}
              >
                LOGIN
              </button>
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
