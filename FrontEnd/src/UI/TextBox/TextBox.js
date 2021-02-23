import React from "react";
import Grid from '@material-ui/core/Grid';
// import TextField from '@material-ui/core/TextField';
import Styles from "./TextBox.module.css"
export default function TextBox(props){

    return (
            <Grid item xs={props.xs} sm={props.sm}>
              <input
                type={props.type}
                autoComplete={props.auto}
                name={props.name}
                required
                style={{width:`${props.width}`}}
                id={props.id}
                label={props.label}
                autoFocus={props.autofocus}
                className={Styles.TextBox}
                placeholder={props.placeholder}
              />
        </Grid>
        
    )
}