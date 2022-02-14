import React from "react";
import '../../styles/styles.css';


class Nav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
        this.navItems = React.createRef();
        this.toggleMenu = this.toggleMenu.bind(this);
    }
 toggleMenu() {
    this.navItems.current.classList.toggle("active");
 }

    render() {

            
      
    
       
        
        return (
            <div className="nav">
                <div className="nav-desktop">
                <div className="nav-group">
                    <div className="nav-logo">
                        <img src="https://www.diegohvillegas.space/logo.png" alt="logo" />
                    </div>
                </div>
                <div className="nav-group">
                <div className="nav-item">
                    <a href="https://www.diegohvillegas.space/#">INICIO</a>
                </div>
                <div className="nav-item">
                    <a href="https://www.diegohvillegas.space/#proyectos">PROYECTOS</a>
                </div>
                <div className="nav-item">
                    <a href="https://www.diegohvillegas.space/#about-me">ACERCA DE MI</a>
                </div>
                <div className="nav-item">
                    <a href="https://www.diegohvillegas.space/#contacto">CONTACTO</a>
                </div>
                </div>
                </div>
                <div className="nav-mobile">
                <div className="nav-group">
                 
                        <div className="nav-button">
                        <i onClick={this.toggleMenu}  className="fas fa-bars"></i>
                        </div>
                        <ul id="nav-m-items" ref={this.navItems} className="nav-items">
                            <li><a href="https://www.diegohvillegas.space/#">INICIO</a></li>
                            <li><a href="https://www.diegohvillegas.space/#proyectos">PROYECTOS</a></li>
                            <li><a href="https://www.diegohvillegas.space/#about-me">ACERCA DE MI</a></li>
                            <li><a href="https://www.diegohvillegas.space/#contacto">CONTACTO</a></li>

                        </ul>
                        </div>
                 </div>
            </div>
        );
    }
}
export default Nav;