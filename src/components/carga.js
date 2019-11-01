import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Gallery from 'react-grid-gallery';
import axios from 'axios';

let data = {};
export default class carga extends Component {
    

    async componentDidMount() {
       let  datas = await axios.get('http://localhost:4000/api/carga');
       console.log(datas.data);
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
            var images = this.state.images.slice();
            images.splice(this.state.currentImage, 1)
            this.setState({
                images: images
            });
        }
    }

    render () {
        const entre = this.state.images.length > 0;
        return (
            <div>
            {entre ? (
            <div style={{
                display: "block",
                minHeight: "1px",
                width: "100%",
                border: "1px solid #ddd",
                overflow: "auto"}}>
                <div style={{
                     padding: "2px",
                     color: "#666"
                    }}>Current image: {this.state.currentImage}</div>
                <Gallery
                    images={this.state.images}
                    enableLightbox={true}
                    enableImageSelection={false}
                    currentImageWillChange={this.onCurrentImageChange}

                    customControls={[
                        <a href={'/delete/'+this.state.currentImage} class="btn btn-danger btn-block">
                            Delete
                        </a>
                    ]}
                />
            </div>
            ) : (<h1>cargando</h1>)}
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


