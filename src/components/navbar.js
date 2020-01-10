import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

export default class navbar extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          prevScrollpos: window.pageYOffset,
          visible: true,
          menu: true,
          respon: false
        };
      }
    
      // Adds an event listener when the component is mount.
      componentDidMount() {
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
          this.setState(state => ({
            menu: !this.state.menu
          }));
        }else{
        }
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
                            <a href="#"><img src="images/logo.png" alt="logo" /></a>
                        </div>
                        <div className="responsive"><i data-icon="m" className="ion-navicon-round" onClick={this.vermenu} /></div>
                        <ul className= { this.state.menu ? "nav-menu-visible nav-menu list-unstyled" : "nav-menu-invisible nav-menu list-unstyled"} >
                        
                            <li><Link
                                    activeClass="actived"
                                    to="header"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {500}>Home </Link></li>
                            <li><Link
                                    activeClass="actived"
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {500}
                                    className="menu">Sobre Mi </Link></li>
                            <li><Link
                                    activeClass="actived"
                                    to="resume"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {500}>Experiencia</Link></li>     
                            <li><Link
                                    activeClass="actived"
                                    to="reel"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {500}>Reel</Link></li>     
                            <li><Link
                                    activeClass="actived"
                                    to="portfolio"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {500}>Portfolio</Link></li>
                               
                            <li><Link
                                    activeClass="actived"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {500}>Cuadros</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

        )
    }
}
