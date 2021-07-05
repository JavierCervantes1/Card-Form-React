import React from 'react';

import './styles/Formulario.css';

function Formulario(props){
    return(
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <h2 className="card-title">Datos del Usuario</h2>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="mt">Nombre Completo</label>
                                <input id="UserName" name="UserName" className="form-control" placeholder="Ingrese Nombres" />
                            </div>
                            <div className="form-group">
                                <label className="mt">Teléfono Celular</label>
                                <input id="CellPhone" name="CellPhone" className="form-control" placeholder="Ingrese su Número Celular" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="mt">Número de Identificación</label>
                                <input id="Identification" name="Identification" className="form-control" placeholder="Ingrese su Cédula" />
                            </div>
                            <div className="form-group">
                                <label className="mt">Correo Electrónico</label>
                                <input id="Email" name="Email" className="form-control" placeholder="Ingrese su e-mail" />
                            </div>
                        </div>
                    </div> 

                    <button className="btn btn-primary btnSave" onClick={props.store}>
                        Guardar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Formulario;