import React from "react";
import '../../styles/styles.css';



const ProjectCard = (props)=> {
   
    // -------------------------------------------------
    // Elemento más pequeño de la lista de proyectos
    // -------------------------------------------------
    // Debe agregarse algo que permita crear un id único para cada item Info 

        function Info(props) {
            return (
                <div className="card-item">
                    <div className="card-image">
                        <img src={props.imgURL} alt={props.nombre}/>
                        <span className="card-title">{props.nombre}</span>
                    </div>
                    <div className="card-content">
                        <p>{props.descripcion}</p>
                        <b>Duración: {props.duracion}</b>
                    </div>
                    <div className="card-action">
                      
                        <a href={"/projects/"+props.id} >Ver más</a> 
                    </div>
                </div>
            );
        }
       
          
        return(
            <div className="card" categoria={props.categoria}>
                <Info nombre={props.nombre} imgURL={props.imagen} id={props.id} descripcion={props.descripcion} categoria={props.categoria} duracion={props.duracion} render={props.render} />
                
            </div>
        )
    
}
export default ProjectCard;