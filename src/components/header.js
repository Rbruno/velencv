import React, { Component } from 'react';
import Typing from 'react-typing-animation';

export default class header extends Component {
    render() {
        return (
            <div id="header" className="home">
                <div className="container">
                    <div className="header-content">
                        <h1>Soy 
                        <Typing loop={true} >
                            <span>Valentino Ramella</span>
                            <Typing.Backspace count={17} />
                            <span>Artista Plastico</span>
                            <Typing.Backspace count={16} />
                            <Typing.Speed ms={100} />
                            <span>Modelo</span>
                            <Typing.Backspace count={6} />
                            <Typing.Speed ms={100} />
                            <span>Actor</span>
                            <Typing.Backspace count={5} />
                            <span>Valentino Ramella</span>
                        </Typing></h1>

                        <p>Artista Plastico, Actor, Modelo</p>
                        <ul className="list-unstyled list-social">
                            <li><a href="#"><i className="ion-social-facebook" /></a></li>
                            <li><a href="#"><i className="ion-social-twitter" /></a></li>
                            <li><a href="https://www.instagram.com/vramella/?hl=es-la"><i className="ion-social-instagram" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>

        )
    }
}
