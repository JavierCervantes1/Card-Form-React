import React from 'react';

import '../components/styles/User.css';
import Formulario from '../components/Formulario';

class User extends React.Component {

    constructor(){
        super()
        this.state = {
            UserArray: [],
        }
        this.store = this.store.bind(this)
    }

    store() {
        console.log('Clicked');
        let Usuario = {
            UserName: document.getElementById('UserName').value,
            Identification: document.getElementById('Identification').value,
            CellPhone: document.getElementById('CellPhone').value,
            Email: document.getElementById('Email').value
        }

        this.state.UserArray.push(Usuario);

        this.setState({
            UserArray: this.state.UserArray,
        });
        //console.log(this.state.UserArray);
        document.getElementById('UserName').value = '';
        document.getElementById('Identification').value = '';
        document.getElementById('CellPhone').value = '';
        document.getElementById('Email').value = '';
    }

    render() {
        return (
            <div>
                <Formulario store={this.store} />
                <div className="row">
                    {this.state.UserArray.map((User, index) => (
                        <CardUser key={index} User={User} />
                    ))}
                </div>
            </div>
        )
    }
}

function CardUser({User}) {
    //console.log(User);
    return (<div className="col-md-3 userinfo">
        <div className="card">
            <div className="card-header">
                <h5 className="card-title">{User.UserName}</h5>
            </div>
            <div className="card-body">
                <p className="card-text">CC: {User.Identification}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Teléfono: {User.CellPhone}</li>
                <li className="list-group-item">Correo: {User.Email}</li>
            </ul>
        </div>
    </div>);
}

export default User;