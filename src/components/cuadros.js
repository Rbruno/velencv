import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
import axios from 'axios';
let data = {};
  
export default class portfolio extends Component {
    async componentDidMount() {
        const url = './Api/cuadros.php'
        axios.get(url).then(response => response.data)
        .then((data) => {
        this.setState({ images: data })
        console.log(this.state.images)
        })
        /*let  datas = await axios.get('https://valentino-ramella.herokuapp.com/api/carga_cuadros',{headers: {"Access-Control-Allow-Origin": "*"}});
        console.log(datas.data);
        data = datas.data;
        this.setState({images : data});*/
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
