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
                            <img src={'./images/me4.jpg'}  height="200"/>
                            <span>Amante del Arte</span>
                            <p className="separator">Como artista plastico admiro todo tipo de arte, y lo incluyo en mi dia a dia</p>
                        </div>
                        <div className="services-block">
                            <img src={'./images/corre1.jpg'}  height="200"/>
                            <span>LA vida a colores</span>
                            <p className="separator">Vivo la vida en todo su explendor, tan variante y diversa como el espectro completo del color. </p>
                        </div>
                        <div className="services-block">
                            <img src={'./images/corre2.jpg'}  height="200"/>
                            <span>Lienzo</span>
                            <p className="separator">No se me ocurrio que poner aca... </p>
                        </div>
                        <div className="services-block">
                            <img src={'./images/corre3.jpg'}  height="200"/>
                            <span>Adorador de las mascotas</span>
                            <p className="separator">Tengo dos gatos que adoro con mi alma, son mi sonrisa de cada mañana, y mi momento de relax al volver a casa. </p>
                        </div>
                        <div className="services-block">
                            <img src={'./images/corre4.jpg'}  height="200"/>
                            <span>A la Pantalla Grande</span>
                            <p className="separator">Tuve la suerte de no solo poder desempeñarme como actor en teatro sino tambien en television, y en una de las series del momento. </p>
                        </div>
                        <div className="services-block">
                            <img src={'./images/blog-post-1.jpg'}  height="200"/>
                            <span>Musicoterapia</span>
                            <p className="separator">La musica me transporta a otros lugares, mi imaginacion estalla de emosion con una buena cancion de fondo. </p>
                        </div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>

        )
    }
}
