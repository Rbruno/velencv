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
                        nav
                    >
                        <div className="services-block">
                            <i className="ion-paintbrush" />
                            <span>UI/UX DESIGN</span>
                            <p className="separator">To an English person, it will seem like simplified English,told me what </p>
                        </div>
                        <div className="services-block">
                            <i className="ion-android-color-palette" />
                            <span>BRAND IDENTITY</span>
                            <p className="separator">To an English person, it will seem like simplified English,told me what </p>
                        </div>
                        <div className="services-block">
                            <i className="ion-easel" />
                            <span>WEB DESIGN</span>
                            <p className="separator">To an English person, it will seem like simplified English,told me what </p>
                        </div>
                        <div className="services-block">
                            <i className="ion-ios-paw" />
                            <span>MOBILE APPS</span>
                            <p className="separator">To an English person, it will seem like simplified English,told me what </p>
                        </div>
                        <div className="services-block">
                            <i className="ion-videocamera" />
                            <span>Analytics</span>
                            <p className="separator">To an English person, it will seem like simplified English,told me what </p>
                        </div>
                        <div className="services-block">
                            <i className="ion-ios-musical-note" />
                            <span>PHOTOGRAPHY</span>
                            <p className="separator">To an English person, it will seem like simplified English,told me what </p>
                        </div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>

        )
    }
}
