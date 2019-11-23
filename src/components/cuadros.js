import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
//import axios from 'axios';
import cuadros from './Api/cuadros.json';
let data = {};
  
export default class portfolio extends Component {
    async componentDidMount() {
        data = cuadros;
        this.setState({ images: data })
        console.log(this.state.images)
    }

    constructor(props){
        super(props);

        this.state = {
            images: data
        };

        
    }
        
    render() {
        const entre = this.state.images.length > 0;
        return (
            <div>
                {entre ? (
                    <div id="cuadros" className="text-center paddsection">
                        <div className="container">
                            <div className="section-title text-center">
                                <h2>Cuadros</h2>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                <Gallery images={this.state.images}/>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (<div className="alert alert-primary" role="alert">
                        Cargando Imagenes...
              </div>)}
            </div>
        )
    }
}
