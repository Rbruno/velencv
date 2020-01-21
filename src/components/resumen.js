import React, { Component } from 'react'

export default class resumen extends Component {
    render() {
        return (
            <section id="resume">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="block-content mb-100 pb-30">
                                <div className="row">
                                    <div className="col-md-12">
                                    <div className="sub-title mb-40 text-center">
                                            <h2 className="uppercase">DATOS PERSONALES</h2>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="row">
                                    <div className="col-md-12 col-md-offset-3  col-sm-12 col-sm-offset-3 ">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item listas"><span  style={{color: "#170d6e"}}>Nombre: </span> Valentino Martín Ramella</li>
                                        <li className="list-group-item listas"><span  style={{color: "#170d6e"}}>Nacimiento:</span> 03/05/1988</li>
                                        <li className="list-group-item listas"><span  style={{color: "#170d6e"}}>Nacionalidad:</span> Argentina</li>
                                        <li className="list-group-item listas"><span  style={{color: "#170d6e"}}>E-Mail:</span><a href="mailto:Valenramella88@gmail.com"> Valenramella88@gmail.com</a></li>
                                        <li className="list-group-item listas"><span  style={{color: "#170d6e"}}>Instagram:</span> vramella</li>
                                    </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>  
                </div>
            </section>

        )
    }
}
