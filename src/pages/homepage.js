import { Helmet } from "react-helmet";

import Header from "../components/layout/header";
import SwitchProjects from "../components/layout/switch-projects";
import React from "react";
import '../styles/styles.css';
import Educacion from "../components/layout/educacion";
import Mailform from "../components/layout/form";
import Presupuestador from "../components/layout/presupuestador";
import AboutMe from "../components/layout/about-me";
import Footer from "../components/layout/footer";


const Homepage=()=>{
    return(
        <div>
            
                <Helmet> 
                    <title>DV Diseño Web / Multimedial</title>
                    <link rel="icon" type="image/png" href="fav.ico"></link>
                </Helmet>
                <Header/>
            
                <SwitchProjects/>
                <Educacion/>
                <AboutMe/>
                <Presupuestador/>
                <div className="contact">
                <Mailform sizes="l-center" display="flow-column"/>
                </div>
                <Footer/>
              
        </div>
    )
}
export default Homepage;