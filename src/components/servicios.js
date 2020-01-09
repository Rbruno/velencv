import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class servicios extends Component {
    render() {
        return ( 
            <div id="services">
                <div className="container">
                    <div className="services-carousel owl-theme">
                    <OwlCarousel
                        className="owl-theme"
                        loop
                        margin={0}
                        dots={false}
                        autoplay={true}
                    >
                        <div className="services-block">
                            <img src={'./images/about01.jpg'} alt='Mencion'  height="200"/>
                        </div>
                        <div className="services-block">
                            <img src={'./images/about02.jpg'} alt='Exposicion'  height="200"/>
                        </div>
                        <div className="services-block">
                            <img src={'./images/about03.jpg'} alt='Exposicion' height="200"/>
                            <span>Exposicion</span>
                        </div>
                        <div className="services-block">
                            <img src={'./images/about04.jpg'} alt='Exposicion' height="200"/>
                        </div>
                         
                        </OwlCarousel>
                    </div>
                </div>
            </div>

        )
    }
}
/*
<div className="services-block">
                            <img src={'./images/about04.jpg'} alt='Exposicion' height="200"/>
                            <span>Adorador de las mascotas</span>
                            <p className="separator">Tengo dos gatos que adoro con mi alma, son mi sonrisa de cada mañana, y mi momento de relax al volver a casa. </p>
                        </div>
                        */ 