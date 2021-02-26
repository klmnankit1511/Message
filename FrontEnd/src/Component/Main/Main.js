import React, { useEffect, useState } from "react"
import Styles from "./Main.module.css"
import axios from "axios"
import Card from "./Card/Card";
import Loading from "../../UI/Loading/Loading";

export default function Main(props){
    const [data,setData] = useState("");
    const [ch,setCh] = useState(true)
    console.log(props);
    

        useEffect(()=>{
            var postData = {
                token:props.check.state.accessToken
            }
            if(ch){

               var k =  axios.post(props.check.state.apiUrl+"api/main").then((res)=>{
                    setData(res.data)
                    console.log(res.data);
                    setCh(false)
                })
            }
        })
        var arr=[];
        for (var i=0;i<data.length;i+=2){
            arr.push(data[i])
        }
    return(
        <>
        {ch?<Loading></Loading>:<div className="container-fliud">
            <div className="row">
            <div className={`col-lg-6 ${Styles.sec2}`}>
                <h1>Our Today Events</h1>
                        {arr.map((da,i)=>(
                            <Card 
                                date={da.date}
                                name={da.name}
                                type = {da.type}
                            />
                        ))}
                </div>
                
                <div className={`col-lg-6 ${Styles.sec1}`}>
                    <h1>Thank You for using our Service</h1>
                </div>
                
            </div>
        </div>}
        </>
        
    )
}