import React from "react"
import Styles from "./Card.module.css"

export default function Card(props){
    return(
        <div className={Styles.card}>
            <div className={Styles.content}></div>
            <span>{props.date}</span>
            <span>{props.name}</span>
            <span>{props.type}</span>
            
        </div>
    )
}
