import React from "react";
const Button = (props)=>{
    // Elemento input para ingresar datos
    // sus propiedades son: 
    // type (string): submit, reset, button.
    
        
    
    return (
        <div className={props.sizes}>
            <label>{props.label}</label>
            <button type={props.type} name={props.name} value={props.value} className={props.clase}>{props.text}</button>
        </div>
    )
    }
    export default Button;