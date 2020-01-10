import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
//import axios from 'axios';
import fotos from './Api/fotos.json';
let data = {};
  
export default class portfolio extends Component {
    async componentDidMount() {
        //let  datas = await axios.get('https://valentino-ramella.herokuapp.com/api/carga',{headers: {"Access-Control-Allow-Origin": "*"}});
        
        data = fotos;
        this.setState({images : data});
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
                    <div id="portfolio" className="text-center paddsection">
                        <div className="container">
                            <div className="section-title text-center">
                                <h2>Portfolio</h2>
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
