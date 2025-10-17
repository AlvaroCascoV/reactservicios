import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';

export default class EmpleadosDepartamento extends Component {
    url = Global.urlEmpleados;
    cajaDepartamento = React.createRef();

    buscarEmpleados = (event) => {
        event.preventDefault();
        let idDepartamento = this.cajaDepartamento.current.value;
        let request = "api/Empleados/empleadosdepartamento/" + idDepartamento
        axios.get(this.url + request).then(response => {
            console.log("leyendo empleados con idDepartemento: " + idDepartamento)
            this.setState({
                empleados: response.data
            })
        })
    }

    state = {
        empleados: []
    }

    render() {
        return (<div>
            <h1 style={{ color: "blue" }}>Api Empleados Departamento</h1>
            <form>
                <label>Introduzca ID Departamento: </label>
                <input type="text" ref={this.cajaDepartamento} />
                <button onClick={this.buscarEmpleados}>Buscar empleados</button>
            </form>
            <ul>
                {
                    this.state.empleados.map((empleado, index) => {
                        return (<li key={index}>{empleado.apellido}</li>)
                    })
                }
            </ul>
        </div>)
    }
}
