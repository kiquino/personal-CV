import React from "react";
const AboutMe =()=>{

    return(
        <div className="about-me" id="about-me">
       <div className="about-me-title">
                <h2> <i>Un poco sobre mi ...</i></h2>
                     
                     
                </div>
                <div className="about-me-content">
                    <div className="about-me-img">
                        <img src="https://www.diegohvillegas.space/profile.jpg" alt=""/>
                    </div>
                    <div className="about-me-text">
                        <h2>Hola! Me llamo Diego Villegas!</h2><p> <br></br> 
                        Soy diseñador Multimedial, pero desde hace años me especializo en diseño web, y programación. Me gusta trabajar en equipo y especialmente con diseñadores gráficos 🎨 y de otras areas 💻 .</p>
                        <br></br>
                        <p>
                            Me considero una persona creativa, diligente y determinada. 
                        </p><br></br>
                        <p>En mi tiempo libre me gusta mucho jugar en la computadora 🎮, ponerme al día 📰 , y ver peliculas 📺  </p>
                        <p> Siempre estudio algo, por lo que ademas de mi tiempo de investigación y autodidacta, también he hecho cursos en: <br></br><br></br><b>TECLAB</b> - <b>UTN</b> - <b>Codo a Codo</b> - <b>Educación IT</b> y <b>Escuela DaVinci</b> </p>
                        <p>Espero poder seguir aprendiendo y de formar parte de muchos proyectos.</p>
                        <br></br>
                        <p>Actualmente pueden ver algunos de mis perfiles laborales en estas redes:</p>
                        <div className="about-me-social">
                        <a href="https://www.linkedin.com/in/diegohvillegas/" target="_blank" rel="noopener noreferrer"> <i className="fab fa-linkedin"></i></a>
                        <a href="https://github.com/kiquino" target="_blank" rel="noopener noreferrer">  <i className="fab fa-github"></i></a>
                        <a href="https://www.behance.net/kiquino" target="_blank" rel="noopener noreferrer"><i className="fab fa-behance-square"></i></a>
                             </div>
                        </div>
                </div>
                </div>
           
         
    )
}
export default AboutMe;