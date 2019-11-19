import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Gallery from 'react-grid-gallery';
import axios from 'axios';

//Components of Controllers
import Form from './form_cuadro';

let data = {};
export default class carga extends Component {
    

    async componentDidMount() {
       let  datas = await axios.get('https://valentino-ramella.herokuapp.com/api/carga_cuadros');
       data = datas.data;
       this.setState({images : data});
    }

    constructor(props){
        super(props);

        this.state = {
            images: data,
            currentImage: 0
        };

        this.onCurrentImageChange = this.onCurrentImageChange.bind(this);
        this.deleteImage = this.deleteImage.bind(this);
    }

    onCurrentImageChange(index) {
        this.setState({ currentImage: index });
    }

    deleteImage() {
        if (window.confirm(`estas seguro que queres borrar esta imagen ${this.state.currentImage}?`)) {
            
        }
    }


    render () {
        const entre = this.state.images.length > 0;
        return (
            <div className="container-fluid " style={{background: '#f7f7f7'}}>
            <div className="row">
                <div className="col-md-12">  
                    <h1 className="text-center shadow p-3 mb-5 bg-white rounded" style={{color: '#117a8b'}}>Panel de Control</h1>
                </div>
            </div>
            {entre ? (
            
            <div className="row">
                <div className="col-md-3">
                    <Form />
                </div>
                <div className="col-md-9">
                    <h2 class="text-center">Lista de imagenes</h2>
                    <Gallery
                        images={this.state.images}
                        enableLightbox={true}
                        enableImageSelection={false}
                        currentImageWillChange={this.onCurrentImageChange}

                        customControls={[
                            <a href={'https://valentino-ramella.herokuapp.com/api/carga/delete_cuadro/'+this.state.currentImage} className="btn btn-danger btn-block">
                                Delete
                            </a>
                        ]}
                    />
                </div>
            </div>
            ) : (
                <div className="alert alert-success" role="alert">
                    Cargando imagenes...
                </div>
                )}
            </div>
        );
    }
}

data.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            thumbnail: PropTypes.string.isRequired,
            srcset: PropTypes.array,
            caption: PropTypes.string,
            thumbnailWidth: PropTypes.number.isRequired,
            thumbnailHeight: PropTypes.number.isRequired
        })
    ).isRequired
};


