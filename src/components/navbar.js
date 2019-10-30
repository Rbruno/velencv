import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

export default class navbar extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          prevScrollpos: window.pageYOffset,
          visible: true
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
    render() {
        return (
            <nav id="main-nav" className={ !this.state.visible ? "nav-visible" : "nav-invisible"
              }>
                <div className="row">
                    <div className="container">
                        <div className="logo">
                            <a href="index.html"><img src="images/logo.png" alt="logo" /></a>
                        </div>
                        <div className="responsive"><i data-icon="m" className="ion-navicon-round" /></div>
                        <ul className="nav-menu list-unstyled">
                        
                            <li><Link
                                    activeClass="active"
                                    to="header"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {500}>Home </Link></li>
                            <li><Link
                                    activeClass="active"
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {500}>Sobre Mi </Link></li>
                            <li><Link
                                    activeClass="active"
                                    to="portfolio"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {500}>Portfolio</Link></li>
                            <li><Link
                                    activeClass="active"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {500}>Contacto</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

        )
    }
}
