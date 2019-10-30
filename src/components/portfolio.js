import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';

const IMAGES =
[{
        src: "./images/portfolio/1.jpg",
        thumbnail: "./images/portfolio/1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: "./images/portfolio/2.jpg",
        thumbnail: "./images/portfolio/2.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
},

{
        src: "./images/portfolio/3.jpg",
        thumbnail: "./images/portfolio/1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
},
{
    src: "./images/portfolio/4.jpg",
    thumbnail: "./images/portfolio/4.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212
},
{
    src: "./images/portfolio/5.jpg",
    thumbnail: "./images/portfolio/5.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212
},
{
    src: "./images/portfolio/6.jpg",
    thumbnail: "./images/portfolio/6.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212
},
{
    src: "./images/portfolio/7.jpg",
    thumbnail: "./images/portfolio/7.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212
},
{
    src: "./images/portfolio/8.jpg",
    thumbnail: "./images/portfolio/8.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212
},
{
    src: "./images/portfolio/9.jpg",
    thumbnail: "./images/portfolio/9.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212
},
{
    src: "./images/portfolio/10.jpg",
    thumbnail: "./images/portfolio/10.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212
},
{
    src: "./images/portfolio/11.jpg",
    thumbnail: "./images/portfolio/11.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212
},
{
    src: "./images/portfolio/12.jpg",
    thumbnail: "./images/portfolio/12.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212
},
{
    src: "./images/portfolio/13.jpg",
    thumbnail: "./images/portfolio/13.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212
},
{
    src: "./images/portfolio/14.jpg",
    thumbnail: "./images/portfolio/14.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212
},
{
    src: "./images/portfolio/15.jpg",
    thumbnail: "./images/portfolio/15.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212
},
{
    src: "./images/portfolio/16.jpg",
    thumbnail: "./images/portfolio/16.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212
},
{
    src: "./images/portfolio/17.jpg",
    thumbnail: "./images/portfolio/17.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212
},
{
    src: "./images/portfolio/18.jpg",
    thumbnail: "./images/portfolio/18.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212
},
{
    src: "./images/portfolio/19.jpg",
    thumbnail: "./images/portfolio/19.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212
},
{
    src: "./images/portfolio/20.jpg",
    thumbnail: "./images/portfolio/20.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212
},
{
    src: "./images/portfolio/21.jpg",
    thumbnail: "./images/portfolio/21.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212
},
{
    src: "./images/portfolio/22.jpg",
    thumbnail: "./images/portfolio/22.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212
},
{
    src: "./images/portfolio/23.jpg",
    thumbnail: "./images/portfolio/23.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212
}




]
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
                        <Gallery images={IMAGES}/>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
