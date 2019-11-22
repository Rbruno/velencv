import React, { Component } from 'react';
import 'video-react/dist/video-react.css';
import { Player } from 'video-react';
  
export default class reel extends Component {

        
    render() {
        return (
            <div>
                <div id="reel" className="text-center paddsection">
                    <div className="container">
                        <div className="section-title text-center">
                            <h2>REEL</h2>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                            <Player
                                playsInline
                                poster="../../public/images/corre1.jpg"
                                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                            />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
