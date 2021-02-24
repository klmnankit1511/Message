import React from "react"
import Styles from "./SelectBox.module.css"
export default function SelectBox(props){
    return(
        <select className={Styles.select} name={props.type} id={props.id}>
            <option value="">SELECT</option>
        <option value="Marriage Anniversary">Marriage Anniversary</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
        </select>
    )
}
