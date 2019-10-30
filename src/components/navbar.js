import React, { Component } from 'react';

export default class navbar extends Component {
    render() {
        return (
            <nav id="main-nav">
                <div className="row">
                    <div className="container">
                        <div className="logo">
                            <a href="index.html"><img src="images/logo.png" alt="logo" /></a>
                        </div>
                        <div className="responsive"><i data-icon="m" className="ion-navicon-round" /></div>
                        <ul className="nav-menu list-unstyled">
                            <li><a href="#header" className="smoothScroll">Home</a></li>
                            <li><a href="#about" className="smoothScroll">Sobre Mi</a></li>
                            <li><a href="#portfolio" className="smoothScroll">Portfolio</a></li>
                            <li><a href="#contact" className="smoothScroll">Contacto</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

        )
    }
}
