import React, { useEffect } from "react"
import "./styles.css";
import axios from "axios";
import Layout from "./Component/Layout/Layout";
import { Provider } from "unstated";


export default function App(){
  // useEffect(()=>(
  //   fetch("http://localhost:3002/").then((res)=>{
  //     return res.json()
  // }).then((resp)=>{
  //   console.log(resp);
  // })
  // ));
  return(
    <React.StrictMode>

    <div>
      <Provider>
        <Layout></Layout>
      </Provider>
    </div>
    </React.StrictMode>
  )
}


