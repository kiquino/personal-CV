import React from "react";
import { useParams } from "react-router";
import { Helmet } from "react-helmet";
import Nav from '../components/individuals/nav'
import Footer from "../components/layout/footer";
import '../styles/styles.css';
import AboutMe from "../components/layout/about-me";
import Form from "../components/layout/form";
import AboutProject from "../components/layout/about-project";

const Projects = () => {
    const {id} = useParams();
    const arrayExperiencia = [
        {
            nombre:'Etel Fray Arquitecta',
            categoria:'all html bootstrap php',
            descripcion:'Landing page con diseño responsive y envío de formulario',
            texto:'El sitio de Etel Fray fue un proyecto entretenido de maquetación, responsivo y con el objetivo de utilizar bootstrap como framework principal. Utiliza un Banner carrousel que se adapta al tamaño de la pantalla en 2 formatos (vertical/horizontal). El sistema de mensajeria pasa por una base de PHP y se manda utilizando el correo del hosting. El proyecto duró aproximadamente un mes y fue realizado en conjunto con una diseñadora.',
            enlace:'https://etelfreyarquitecta.com.ar/',
            duracion: "1 mes",
            imagen:'../../etel.jpg',
            actualidad:'Actualmente el sitio se encuentra desplegado en su hosting y se puede acceder desde todas las plataformas.',
            tools:{
                html:'../../html5.png',
                css:'../../css3.png',
                bootstrap:'../../bootstrap.png',
                php:'../../php.png'
            }
        },{
            nombre:'Agnostic (Práctica)',
            categoria:'all html CSS3/SCSS javascript practica',
            descripcion:'Landing page con diseño responsive, navegacion lateral con js',
            texto:'La práctica de Agnostic está realizada enteramente con codiigo própio en concepto de "renovar" el maquetado actual del sitio. Fue maquetada enteramente en HTML y CSS con responsive hecho en CSS y javascript, no se utilizaron guias ni frameworks. Cuenta con 2 formatos responsivos (Mobile/Desktop). Está actualmente a modo de demostración y fue realizada a lo largo de dos días.',
            enlace:'https://dazzling-spence-b14e0e.netlify.app',
            actualidad:'Actualmente guardo un repositorio en github donde la gente puede ver la fuente.',
            duracion: "2 días",
            imagen:'../../agnostic.jpg',
            tools:{
                html:'../../html5.png',
                css:'../../css3.png',
                javascript:'../../javascript.png',

            }
        },{
            nombre:'Doctora Casariego',
            categoria:'all html CSS3/SCSS',
            descripcion:'Landing page con diseño responsive.',
            duracion: "1 día",
            texto:'El sitio de la Doctora casariego pasó por varios cambios a lo largo de los años y se fueron perdiendo versiones anteriores. El sitio cuenta con un formato básico y solamente fue armado en una tarde en HTML5 y CSS3.',
            enlace:'/',
            actualidad:'Actualmente la página fue dada de baja desde actubre 2021',
            imagen:'../../casariego.jpg',
            tools:{
                html:'../../html5.png',
                css:'../../css3.png'
            }
        },{
            nombre:'Centro Ecorad',
            categoria:'all html php css3/SCSS javascript sql',
            descripcion:'Sitio administrativo completo con login, formulario y 4 secciónes.',
            duracion: "3 meses",
            texto:'El centro ecorad fue un trabajo de maquetación, en conjunto con la administración del centro. El concepto fue crear un sitio con acceso a los elementos del centro, turnero e información sobre los doctores. Un registro de usuario y medicos con accesos diferenciales. Una base de datos con 3 tablas no relacionadas de SQL. Fue Maquetada en HTML directamente sobre un PHP. ',
            enlace:'https://ecorad.com.ar/',
            actualidad:'Actualmente el sitio esta en mantenimiento y se encuentra pausado el desarrollo.',
            imagen:'../../ecorad.jpg',
            tools:{
                html:'../../html5.png',
                php:'../../php.png',
                css:'../../css3.png',
                javascript:'../../javascript.png',
                sql:'../../sql.png'
            }
        },{
            nombre:'Lenovo(Práctica)',
            categoria:'all html css3/scss practica',
            descripcion:'maquetado ecommerce con diseño responsive.',
            duracion: "2 días",
            imagen:'../../ejercicio-lonovo.jpg',
            texto:'Esta practica fue realizada en en el plazo de 48hs con el concepto de copiar con la menor cantidad de elementos y puramente cambios en CSS3. ',
            enlace:'https://github.com/kiquino/LENOVO',
            actualidad:'Actualmente el proyecto se encuentra en un repositorio de github público para que la gente pueda ver la fuente.',
            tools:{
                html:'../../html5.png',
                css:'../../css3.png'
            }
        },{
            nombre:'Flash Mobile',
            categoria:'all html bootstrap css3/scss javascript ',
            descripcion:'Landing page con diseño responsive y envio de formulario, ',
            duracion: "3 semanas",
            imagen:'../../flash.jpg',
            texto:'Flash mobile fue un proyecto en conjunto con una diseñadora gráfica. El proyecto fue maquetado en HTML5 y CSS3 con responsive para mobile y desktop. El sistema de mensaje esta hecho en php con reactividad con javascript.',
            enlace:'https://www.flashmobile.com.ar/',
            actualidad:'Actualmente el sitio se encuentra desplegado en su hosting y se puede acceder desde todas las plataformas.',
            tools:{
                html:'../../html5.png',
                css:'../../css3.png',
                bootstrap:'../../bootstrap.png',
                javascript:'../../javascript.png',
                php:'../../php.png'
            }
        },{
            nombre:'Gador',
            categoria:'all html CSS3/SCSS php',
            descripcion:'Landing page con diseño responsive, formulario de envío y login/registro. ',
            duracion: "2 semanas",
            imagen:'../../gador.jpg',
            texto:'Gador fue un trabajo realizado en conjunto con un diseñador Gráfico y un equipo en contacto con el cliente en una especie de metodología SCRUM. El proyecto fue maquetado en html5 y css con registro a través de PHP y con sistema de mensajeria de bienvenida con diseño personalizado de email con calendario.',
            enlace:'',
            actualidad:'Actualmente el proyecto se encuentra en un repositorio de Github público.',

            tools:{
                html:'../../html5.png',
                css:'../../css3.png',
                php:'../../php.png'
            }
        },{ 
            nombre:'Julieta Nahum',
            categoria:'all html CSS3/SCSS bootstrap ',
            descripcion:'Sitio completo con diseño responsive, formulario de envío y 2 secciones. ',
            duracion: "1 mes",
            texto:'Este proyecto fue muy sencillo, cooperando con una diseñadora gráfica que fue la encargada de elegir las imagénes, la paleta de colores y la disposicion de los elementos. Yo me encargué de maquetar el sitio y darle responsividad. Fue hecho en su totalidad con html5 y css3 el maquetado a excepcion del carousel de bootstrap, y php con jquery para el envio de formulario.',
            enlace:'https://julietanahum.com/',
            actualidad:'Actualmente el sitio se encuentra activo en un hosting compartido.',
            imagen:'../../julieta.jpg',
            tools:{
                html:'../../html5.png',
                css:'../../css3.png',
                bootstrap:'../../bootstrap.png',
                javascript:'../../javascript.png',
                jquery:'../../jquery.png'
            }

        },{
            nombre:'Pneumatic Norte',
            categoria:'all html bootstrap php',
            descripcion:'Landing page con diseño responsive, formulario de envío y multiples secciones. ',
            duracion: "1 mes",
            imagen:'../../pneumatic.jpg',
            texto:'Pneumatic Norte fue un trabajo realizado en conjunto con un diseñador gráfico. El proyecto fue maquetado en html5 y css3 con responsive para mobile y desktop. Este trabajo tambien cuenta con gran parte de bootstrap. El sistema de mensaje esta hecho en php y jquery.',
            enlace:'https://www.pneumaticnorte.com.ar/',
            actualidad:'Actualmente el sitio se encuentra activo en un hosting compartido.',
            tools:{
                html:'../../html5.png',
                css:'../../css3.png',
                bootstrap:'../../bootstrap.png',
                php:'../../php.png',
                Jquery:'../../jquery.png'
            }

        },{
            nombre:'Rogmann/Werthel',
            categoria:'all html CSS3/SCSS javascript php',
            descripcion:'landing page con parallax, botonera interactiva y formulario de envio,',
            duracion: "1 mes",
            imagen:'../../rogmann.jpg',
            texto:'Rogmann fue un trabajo muy divertido y uno de mis primeros proyectos ya enfocado en el diseño web. Fue cambiando bastante y la vista actual es la última. Fue realizado en html5 y css3 para maquetacion y javascript para darle interactividad. Es responsiva y tiene un sistema de mensajeria con php.',
            enlace:'https://werthel.com/',
            actualidad:'Actualmente el sitio se encuentra activo en un hosting compartido.',
            tools:{
                html:'../../html5.png',
                css:'../../css3.png',
                javascript:'../../javascript.png',
                php:'../../php.png'

            }
        },{
            nombre:'Thomson Reuters',
            categoria:'all html CSS3/SCSS javascript php sql',
            descripcion:'Landing page con diseño responsive, formulario de envío, login/registro y Mailing. ',
            duracion: "1 mes",
            imagen:'../../thomson.jpg',
            texto:'Thomson Reuters fue un trabajo en conjunto con un diseñador gráfico y un equipo encargado de mediar con el cliente en una especie de metodología SCRUM. El sitio fue hecho en html5 y css3 en su totalidad. totalmente responsivo  y con un registro de usuarios con email de bienvenida personalizado.',
            enlace:'',
            actulidad:'actualmente el sitio no se encuentra visible para el público y pronto será dispuesto en github sin elementos de la empresa para ser utilizada por la comunidad.',
            tools:{
                html:'../../html5.png',
                css:'../../css3.png',
                javascript:'../../javascript.png',
                php:'../../php.png',
                sql:'../../sql.png'

            }
        },{
            nombre:'Gestor Backend (practica)',
            categoria:'all html bootstrap nodejs  practica sql',
            descripcion:'Sistema de backend para sitio gestor, práctica de la UTN. Sistema de Login/registro y CRUD. duración: 1 mes',
            duracion: "1 mes",
            imagen:'../../utn-node-ejercicio.jpg',
            texto:'Este proyecto fue una entrega realizada para final del curso de fullstack de la UTN. El proyecto es la parte de backend de un gestor de gastos. con login, registro y todo el manejo de la base de datos con sus respectivas APIs. fue maquetada con nodejs y sus handlebars',
            enlace:'https://gestorappbackend.herokuapp.com/',
            actualidad:'Actualmente el sitio se encuentra subido a heroku de forma gratuita.',
            tools:{

                html:'../../html5.png',
                bootstrap:'../../bootstrap.png',
                nodejs:'../../nodejs.png',
                sql:'../../sql.png'
            }
        },{
            nombre:'Gestor Frontend (practica)',
            categoria:'all html bulma reactjs practica',
            descripcion:'Sistema de Frontend para sitio gestor, práctica de la UTN. Sistema de Login/registro y CRUD. duración: 1 mes',
            duracion: "1 mes",
            texto:'Este proyecto fue una entrega realizada para final del curso de fullstack de la UTN. Es la parte de frontend de un gestor de gastos. Fue realizada en React con Bulma. tiene un login y registro que se envia a traves de una Axios al back. ',
            enlace:'https://gestorappfront.herokuapp.com/',
            actualidad:'Actualmente el sitio se encuentra en heroku de forma gratuita.',
            imagen:'../../utn-react-ejercicio.jpg',
            tools:{
                html:'../../html5.png',
                bulma:'../../bulma.png',
                reactjs:'../../reactjs.png'

            }
        },{
            nombre:'Novoflor Tienda online',
            categoria:'all html css3/scss bootstrap javascript',
            descripcion:'Landing page Ecommerce. Con envio de formulario. duración: 2 semanas',
            duracion: "2 semanas",
            imagen:'../../novoflor.jpg',
            texto:'Este trabajo fue una reconstrucción de un sitio existente de Ecommerce. Fue realizado en conjunto con una diseñadora gráfica. Esta hecho en html, css y php para el formulario de contacto.',
            enlace:'https://github.com/kiquino/floreria',
            actualidad:'Actualmente el sitio se encuentra en github en un repositorio publico.',
            tools:{
                html:'../../html5.png',
                css:'../../css3.png',
                bootstrap:'../../bootstrap.png',
                javascript:'../../javascript.png',
                php:'../../php.png'
            }
        },{
            nombre:'Portfolio online',
            categoria:'all html css3/scss Reactjs javascript nodejs',
            descripcion:'Actualización de portfolio con muestras de trabajos de diseño y maquetación web.',
            duracion: "1 mes",
            imagen:'../../portfolio.jpg',
            texto:'Este sitio es la segunda version de mi portfolio. Fue realizado en React con css3. Cuanta con url dinámico para los proyectos, hecho con la libreria de react-router-dom. Fue construido con Webpack y babel.',
            enlace:'https://diegohvillegas.space/',
            actualidad:'Actualmente el sitio esta subido en un hosting compartido y se encuentra en desarrollo.',
            tools:{
                html:'../../html5.png',
                css:'../../css3.png',
                reactjs:'../../reactjs.png',
                javascript:'../../javascript.png',
                nodejs:'../../nodejs.png',
                webpack:'../../webpack.png'
            }
        }
    ]
    let element="";
   for (let index = 0; index < arrayExperiencia.length; index++) {
       // eslint-disable-next-line eqeqeq
       if (index == id) {
         element = arrayExperiencia[index];
         
       }
      
    
       
   }
    return(
        <div className="Projects">
            <Helmet>
                <title>Proyectos</title>
                <meta name="description" content="Proyectos realizados en el desarrollo de sitios web" />
                <link rel="icon" type="image/png" href="../../fav.ico"></link>
            </Helmet>
           <Nav/>
           
           
            <p></p>
            <div className="banner">
            <h1>Carpeta de Proyecto "{element.nombre}" </h1>
                <img src={element.imagen} alt="" /></div>


            <AboutProject title={element.nombre} tools={element.tools} texto={element.texto} enlace={element.enlace} actualidad={element.actualidad} />
            
            <AboutMe />
            <Form />
            <Footer />
            </div>
    )
}
export default Projects;