import React, { Component } from 'react'

export default class form extends Component {
    render() {
        return (
            
            <form method="POST" action="https://valentino-ramella.herokuapp.com/api/carga" encType="multipart/form-data"  className="text-center position-fixed shadow p-1 mb-5 bg-white rounded" style={{top: '175px', left: '1px'}} >
                <p className="h4 mb-4">Agregar Imagen</p>
                {/* File */}
                <div className="form-group">
                <label htmlFor="file">Imagen</label>
                <input type="file" className="form-control-file btn btn-info btn-block" name="file" id="file"/>
                </div>

                {/* Subject */}
                <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">Texto Opcional</label>
                <input type="text" name="caption" id="caption" className="form-control mb-4" placeholder="Texto" />
                </div>
                
                {/* Send button */}
                <button className="btn btn-info btn-block" type="submit">Agregar</button>
            </form >


        )
    }
}
