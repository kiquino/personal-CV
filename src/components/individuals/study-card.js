import React from "react";
import '../../styles/styles.css';
const StudyCard = (props) => {
    
    return ( 
        <div className="studycard" style={props.status}>
            <div className="studycard__img">
                <img src={props.img} alt={props.title}/>
            </div>
            <div className="studycard__info">
                <h3 className="studycard__title">{props.title}</h3>
                <p className="studycard__description">{props.description}</p>
                <i className="studycard__date"><b>Fecha de inicio</b> <br/>{props.dateBegin}</i>
                <i className="studycard__date"><b>Fecha de finalización</b><br/>{props.dateEnd}</i>
            </div>
        </div>
    );
}

export default StudyCard;