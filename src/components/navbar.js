import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

export default class navbar extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          prevScrollpos: window.pageYOffset,
          visible: true,
          menu: true
        };
      }
    
      // Adds an event listener when the component is mount.
      componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
      }
    
      // Remove the event listener when the component is unmount.
      componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
      }
    
      // Hide or show the menu.
      handleScroll = () => {
        const { prevScrollpos } = this.state;
    
        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos > currentScrollPos;
    
        this.setState({
          prevScrollpos: currentScrollPos,
          visible
        });
      };

      vermenu = () =>{
        console.log("entre "+this.state.menu);
        this.setState(state => ({
           menu: !this.state.menu
         }));
    }

    render() {

        

        return (
            <nav id="main-nav" className={ !this.state.visible ? "nav-visible" : "nav-invisible"}>
                <div className="row">
                    <div className="container">
                        <div className="logo">
                            <a href="index.html"><img src="images/logo.png" alt="logo" /></a>
                        </div>
                        <div className="responsive"><i data-icon="m" className="ion-navicon-round" onClick={this.vermenu} /></div>
                        <ul className= { this.state.menu ? "nav-menu-visible nav-menu list-unstyled" : "nav-menu-invisible nav-menu list-unstyled"} >
                        
                            <li><Link
                                    activeClass="active"
                                    to="header"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {500}
                                    onClick={this.vermenu}>Home </Link></li>
                            <li><Link
                                    activeClass="active"
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {500}
                                    onClick={this.vermenu}>Sobre Mi </Link></li>
                            <li><Link
                                    activeClass="active"
                                    to="portfolio"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {500}
                                    onClick={this.vermenu}>Portfolio</Link></li>
                            <li><Link
                                    activeClass="active"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {500}
                                    onClick={this.vermenu}>Contacto</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

        )
    }
}
