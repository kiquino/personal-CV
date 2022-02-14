/* eslint-disable jsx-a11y/anchor-is-valid */

import ProjectCard from "../individuals/cards";
import React from "react";



const SwitchProjects = ()=>{
    
    // -------------------------------------------------
    // Acá se crea la sección de proyectos
    // -------------------------------------------------



    let arrayExperiencia = [
        {
            nombre:'Etel Fray Arquitecta',
            categoria:'all html bootstrap php',
            descripcion:'Landing page con diseño responsive y envío de formulario',
            duracion: "1 mes",
            imagen:'etel.jpg'
        },{
            nombre:'Agnostic (Práctica)',
            categoria:'all html CSS3/SCSS javascript practica',
            descripcion:'Landing page con diseño responsive, navegacion lateral con js',
            duracion: "2 días",
            imagen:'agnostic.jpg'
        },{
            nombre:'Doctora Casariego',
            categoria:'all html CSS3/SCSS',
            descripcion:'Landing page con diseño responsive.',
            duracion: "1 día",
            imagen:'casariego.jpg'
        },{
            nombre:'Centro Ecorad',
            categoria:'all html php css3/SCSS javascript sql',
            descripcion:'Sitio administrativo completo con login, formulario y 4 secciónes.',
            duracion: "3 meses",
            imagen:'ecorad.jpg'
        },{
            nombre:'Lenovo(Práctica)',
            categoria:'all html css3/scss practica',
            descripcion:'maquetado ecommerce con diseño responsive.',
            duracion: "2 días",
            imagen:'ejercicio-lonovo.jpg'
        },{
            nombre:'Flash Mobile',
            categoria:'all html bootstrap css3/scss javascript ',
            descripcion:'Landing page con diseño responsive y envio de formulario, ',
            duracion: "3 semanas",
            imagen:'flash.jpg'
        },{
            nombre:'Gador',
            categoria:'all html CSS3/SCSS php',
            descripcion:'Landing page con diseño responsive, formulario de envío y login/registro. ',
            duracion: "2 semanas",
            imagen:'gador.jpg'
        },{ 
            nombre:'Julieta Nahum',
            categoria:'all html CSS3/SCSS bootstrap ',
            descripcion:'Sitio completo con diseño responsive, formulario de envío y 2 secciones. ',
            duracion: "1 mes",

            imagen:'julieta.jpg'

        },{
            nombre:'Pneumatic Norte',
            categoria:'all html bootstrap php',
            descripcion:'Landing page con diseño responsive, formulario de envío y multiples secciones. ',
            duracion: "1 mes",
            imagen:'pneumatic.jpg'

        },{
            nombre:'Rogmann/Werthel',
            categoria:'all html CSS3/SCSS javascript php',
            descripcion:'landing page con parallax, botonera interactiva y formulario de envio,',
            duracion: "1 mes",
            imagen:'rogmann.jpg'
        },{
            nombre:'Thomson Reuters',
            categoria:'all html CSS3/SCSS javascript php sql',
            descripcion:'Landing page con diseño responsive, formulario de envío, login/registro y Mailing. ',
            duracion: "1 mes",
            imagen:'thomson.jpg'
        },{
            nombre:'Gestor Backend (practica)',
            categoria:'all html bootstrap nodejs  practica sql',
            descripcion:'Sistema de backend para sitio gestor, práctica de la UTN. Sistema de Login/registro y CRUD. duración: 1 mes',
            duracion: "1 mes",
            imagen:'utn-node-ejercicio.jpg'
        },{
            nombre:'Gestor Frontend (practica)',
            categoria:'all html bulma reactjs practica',
            descripcion:'Sistema de Frontend para sitio gestor, práctica de la UTN. Sistema de Login/registro y CRUD. duración: 1 mes',
            duracion: "1 mes",
            imagen:'utn-react-ejercicio.jpg'
        },{
            nombre:'Novoflor Tienda online',
            categoria:'all html css3/scss bootstrap javascript',
            descripcion:'Landing page Ecommerce. Con envio de formulario. duración: 2 semanas',
            duracion: "2 semanas",
            imagen:'novoflor.jpg'
        },{
            nombre:'Portfolio online',
            categoria:'all html css3/scss reactjs javascript nodejs',
            descripcion:'Actualización de portfolio con muestras de trabajos de diseño y maquetación web.',
            duracion: "1 mes",
            imagen:'../../portfolio.jpg',
            
        }
    ]

    function checkCategoria(categoria2) {
    // -------------------------------------------------
    // Es llamado por la botonera de link-projects-nav
    // -------------------------------------------------
    // Cambia el estilo de Display de los elementos que incluyan el valor enviado por la botonera
    // -------------------------------------------------
        let arrayCards = document.querySelectorAll('.card');
        arrayCards.forEach(element => {
            if (element.getAttribute('categoria').includes(categoria2)  ) {
                
                element.style.animation = 'selection__card-show 0.8s ease-in-out forwards'; 
              
                

            }else{
                element.style.animation = 'selection__card 0.8s ease-in-out forwards';
            
                
            }
                
            
        }); 
       
        
       
       }
    window.checkCategoria = checkCategoria;

    
    return(
        <div className="switch-projects">
            <div className="switch-projects__title">
                <h2>Trabajos y Proyectos</h2>
            </div>
            <div id="proyectos" className="switch-projects__list">
                <div className="switch-projects__list-item">
                <ul className="links-projects-nav">
                  {/* Botonera del switcher */}
                    <li><a  onClick={(e)=>{
                       
                      
                       checkCategoria("all");
                    }}>All</a></li>
                    <li><a onClick={(e)=>{
                       
                      
                       checkCategoria("html");
                    }}>HTML - SCSS</a></li>
                    <li><a onClick={(e)=>{
                       
                      
                       checkCategoria("php");
                    }}>PHP</a></li>
                    <li><a onClick={(e)=>{
                       
                      
                       checkCategoria("react");
                    }}>React js</a></li>
                    <li><a onClick={(e)=>{
                         
                        
                         checkCategoria("javascript");
                        }}>Javascript</a></li>
                    <li><a onClick={(e)=>{
                         
                           
                         window.checkCategoria("bootstrap");
                        }
                        }>Bootstrap</a></li>
                        <li><a onClick={(e)=>{
                         
                        
                         checkCategoria("sql");
                        }
                        }>SQL</a></li>
                        <li><a onClick={(e)=>{
                                                                         
                        
                         checkCategoria("nodejs");
                        }   
                        }>Node js</a></li>
                        </ul>
<ul className="project-space">
    <li>  <div className="switch-projects__list-item-title">
                        {/* <h3>Sitios web desarrollados y pro</h3> */}
                    </div>
                    <div className="switch-projects__list-item-description">

                        {/* Agrego elementos al Switcher */}
                        {/* Podria ser llamado por una api y ser recorrido por un map() */}
                        {/* Lo que vaya en CATEGORIA es lo que se considerará para filtrar el switcher - Separar con espacio para legibilidad */}
                        {arrayExperiencia.map((item, index)=>{
                            return(
                                <ProjectCard key={index}id={index} nombre={item.nombre} categoria={item.categoria} descripcion={item.descripcion} duracion={item.duracion} imagen={item.imagen}/>
                            )

                        })}

                        </div></li>
  
</ul>
              
                </div>
                </div>
                </div>  
    )
}
export default SwitchProjects;