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
                                <p className="p-heading">im a ux /ui designer austin based who loves clean, simple &amp; unique design. i also enjoy crafting brand identities, icons, &amp; ilustration work. </p>
                                <p className="separator">To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family.English person.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
