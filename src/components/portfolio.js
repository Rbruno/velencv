import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
import axios from 'axios';
let data = {};
  
export default class portfolio extends Component {
    async componentDidMount() {
        let  datas = await axios.get('https://valentino-ramella.herokuapp.com/api/carga');
        console.log(datas.data);
        data = datas.data;
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
                                <h2>Mi Portfolio</h2>
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
                ) : (<h1>cargando</h1>)}
            </div>
        )
    }
}
