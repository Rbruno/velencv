import React, { Component } from 'react'

export default class about extends Component {
    render() {
        return (
            <div id="about" className="paddsection">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-4 ">
                            <div className="div-img-bg">
                                <div className="about-img">
                                    <img src="images/me.jpg" className="img-responsive" alt="me" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="about-descr">
                                <p className="p-heading">
                                    Artista autodidacta. A través de los años las aspiraciones y propuestas se orientan hacia lo plástico y dramático. Y siempre en búsqueda del crecimiento profesional.</p>
                                <p className="separator">Como actor se ha desempeñado tanto en la television como en teatro. Sus aspiraciones a seguir creciendo como artista lo llevan a emplear nuevos y mayores retos.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
