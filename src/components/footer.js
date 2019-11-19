import React, { Component } from 'react'

export default class footer extends Component {
    render() {
        return (
            <div id="footer" className="text-center">
                <div className="container">
                    <div className="socials-media text-center">
                        <ul className="list-unstyled">
                            <li><a href="#"><i className="ion-social-instagram" /></a></li>
                        </ul>
                    </div>
                    <p>© Copyrights Rodrigo Bruno. All rights reserved.</p>
                    
                </div>
            </div>

        )
    }
}
