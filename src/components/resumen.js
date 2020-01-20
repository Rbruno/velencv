import React, { Component } from 'react'

export default class resumen extends Component {
    render() {
        return (
            <section id="resume">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="block-content mb-100 pb-30">
                                <div className="row">
                                    <div className="col-md-12">
                                    <div className="sub-title mb-40">
                                            <h2 className="uppercase">DATOS PERSONALES</h2>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="row">
                                    <div className="col-md-8 col-md-offset-3  col-sm-8 col-sm-offset-3 ">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item listas"><span  style={{color: "#170d6e"}}>Nombre: </span> Valentino Martín Ramella</li>
                                        <li className="list-group-item listas"><span  style={{color: "#170d6e"}}>Nacimiento:</span>  03/05/1988</li>
                                        <li className="list-group-item listas"><span  style={{color: "#170d6e"}}>Nacionalidad:</span>  Argentina</li>
                                        <li className="list-group-item listas"><span  style={{color: "#170d6e"}}>Estado Civil:</span>  Soltero</li>
                                    </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="block-content mb-100  pb-10">
                                <div className="row">
                                    <div className="col-md-12  ">
                                        <div className="sub-title mb-40">
                                            <h2 className="uppercase">MI EDUCACIÓN</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12  ">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item listas"><span  style={{color: "#170d6e"}}>Colegio de Lasalle -</span> Secundario Completo</li>
                                        <li className="list-group-item listas"><span  style={{color: "#170d6e"}}>Circo SOQ -</span>  Integral de circo (Acrobacias aéreas, de piso y combinadas)  </li>
                                        <li className="list-group-item listas"><span  style={{color: "#170d6e"}}>IUNA de Arte Dramático (Sede French) catedra Flores -</span> Carrera de Actuación (1 año de la carrera)</li>
                                        <li className="list-group-item listas"><span  style={{color: "#170d6e"}}>Centro Cultural Rojas -</span> Clases de Actuación - Profesora Nora Kaleka</li>
                                        <li className="list-group-item listas"><span  style={{color: "#170d6e"}}>Lorena Vega -</span> Seminario de actuación</li>
                                        <li className="list-group-item listas"><span  style={{color: "#170d6e"}}>"La Arena" -</span> Intensivo de Acrobacia de dúo - Profesor Fernando Rosen</li>
                                        <li className="list-group-item listas"><span  style={{color: "#170d6e"}}>Circodromo -</span> Ramka - profesor Facundo Salazar</li>
                                        <li className="list-group-item listas"><span  style={{color: "#170d6e"}}>Circo SOQ -</span> Curso de Trapecio Avanzado - Profesor Gabriel Aggazi</li>
                                        <li className="list-group-item listas"><span  style={{color: "#170d6e"}}>Circo Soq -</span>Curso pedagogico tecnico-practico en telas niveles 1 y 2, - Profesor Mariano Rabade</li>
                                        <li className="list-group-item listas"><span  style={{color: "#170d6e"}}>Centro Cultural Rojas -</span> Curso de Expresion y creacion fisica - Profesor Juan Onofri Barbato</li>

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
