import Button from "../individuals/button";
import 'regenerator-runtime/runtime';
import { useState } from "react";
import axios from "axios";
import React from "react";
const Mailform = (props)=>{
//  types:  text, email, password, number, tel, url, search, range, color, date, datetime, datetime-local, month, time, week.
// sizes:  xs, s, m, l, xl, xxl, xxxl.
// name: string.
// placeholder: string.
// value: string.
// display: flow-row-center, flex-column

const [loading, setLoading] = useState(false);
const [errorClass,setErrorClass] = useState("");
const [sendError,setError]= useState(false);
const[emailSent,setEmailSent]=useState(false);
const[mensaje,setMensaje] = useState("");
const [mailerState, setMailerState] = useState({
    name: "",
    email: "",
    message: ""
});
function handleStateChange(e){
    setMailerState((prevState)=>({
        ...prevState,
        [e.target.name]: e.target.value
    }));
}

const submitEmail = async (e)=>{

    e.preventDefault();
    setLoading(true);
    axios.post('https://fathomless-spire-57502.herokuapp.com/send', {
        // axios.post('localhost:8000/send', {
        name: mailerState.name,
        email: mailerState.email,
        message: mailerState.message,
       
    },{
        headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            "Access-Control-Allow-Origin": "*",
        },
        mode: 'no-cors'
        
    }
    ).then((res)=>{
        setLoading(false);
        setEmailSent(true);
        (res.data.tragedy) ? setErrorClass("fail") : setErrorClass("success");
        (res.data.tragedy) ? setError(true) : setError(false);
        
    
        (sendError) ?   setMensaje("Mensaje no Enviado 😢"):setMensaje("Mensaje Enviado 👌");
    })
    .then(()=>{
       setTimeout(setEmailSent(false),6000)
        setMailerState({
            email: "",
            message: "",
            name:""
        })
        
    })
}

    return(

       <div id="contacto" className="contact__container">
           <div className="contact_title">
                <h2>Contactame</h2>
           </div>
           <form className="contact_form" onSubmit={submitEmail}>
           { loading ?  <div className="loadingio-spinner-dual-ring-jtvoe90skw8"><div className="ldio-1hxpjgvokzlh">
<div></div><div><div></div></div>
</div></div>: <div> </div>}


        {emailSent ? <div className={errorClass}> <p>{mensaje}</p>  </div>: <spam></spam> }
        
                    <div className="box-containers">
            <div className="input-containers">
           <label> Nombre: <input className="input-style" type="text" name="name" placeholder="Nombre" value={mailerState.name} onChange={handleStateChange}/></label>
           <label >Email: <input className="input-style" type="email" name="email" placeholder="Email" value={mailerState.email} onChange={handleStateChange}/></label>
           <label >Mensaje:  <textarea
            name="message" 
            className="input-style" 
            value={mailerState.message}
            placeholder="Mensaje"
            onChange={handleStateChange}
            ></textarea></label>
             {/* <label for="file-upload">Agregar Archivo</label>
            <input id="file-upload" type="file" aria-label="File browser example"/> */}
           </div>
            
            <Button type="submit" sizes="s" name="button_submit" clase="send" value="Enviar" text="ENVIAR"/>
        
        
       </div>
       </form>
       </div>
    )

}
export default Mailform;