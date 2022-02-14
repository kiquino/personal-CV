import React from "react";



const AboutProject=(props)=>{
    const array = props.tools;
   
return(
    <div className="about-project">
        <h1>{props.title}</h1>
        <div className="container">


    <div className="text-project">
       <p>{props.texto}</p>
       <br/>
    <p>{props.actualidad}</p>
        </div>
        <h2>Herramientas</h2>
            <ul>
               {Object.keys(array).map((key)=>{
                   return(
                       <li key={key}>
                            <img src={array[key]} alt=""/>
                       </li>
                   )
               })}
            </ul>

            <a href={props.enlace}>Ir al sitio</a>
        </div>
        </div>
)
}
export default AboutProject;