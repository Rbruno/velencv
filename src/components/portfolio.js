import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
import cuadros from '../pinturas.json';

const data = cuadros;
  
export default class portfolio extends Component {
        
    render() {
        return (
            <div id="portfolio" className="text-center paddsection">
                <div className="container">
                    <div className="section-title text-center">
                        <h2>Mi Portfolio</h2>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <Gallery images={data}/>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
