import React, { Component } from 'react';
import Typing from 'react-typing-animation';

export default class header extends Component {
    render() {
        return (
            <div id="header" className="home">
                <div className="container">
                    <div className="header-content">
                        <h1>
                        <Typing loop={true} >
                            <span>Valentino Ramella</span>
                            <Typing.Backspace count={18} />
                            <span>Artista visual</span>
                            <Typing.Backspace count={17} />
                            <Typing.Speed ms={100} />
                        </Typing></h1>

                        <ul className="list-unstyled list-social">
                            <li><a href="https://www.instagram.com/vramella/?hl=es-la"><i className="ion-social-instagram" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>

        )
    }
}
