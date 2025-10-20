import React, { Component } from 'react'
import Global from '../../Global'
import axios from 'axios'

export default class Empleados extends Component {
    url = Global.urlEmpleados;
    state = {
        empleados: [],
        texto: "",
    }
    componentDidUpdate = (oldProps) => {
        //DIBUJAMOS LAS NUEVAS Y LAS ANTIGUAS
        console.log("Current: " + this.props.iddepartamento);
        console.log("Old: " + oldProps.iddepartamento);
        //SOLAMENTE ACTUALIZAMOS state SI props HA CAMBIADO
        if (oldProps.iddepartamento !== this.props.iddepartamento) {
            this.loadEmpleados();
        }
    }

    loadEmpleados = () => {
        let idDepartamento = this.props.iddepartamento;
        let request = "api/empleados/empleadosdepartamento/" + idDepartamento;
        axios.get(this.url + request).then(response => {
            console.log("leyendo empleados dept: " + idDepartamento)
            this.setState({
                empleados: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadEmpleados();
    }

    render() {
        return (<div>
            <h1 style={{ color: "blue" }}>Empleados Component {this.props.iddepartamento}</h1>
            <h2>{this.state.texto}</h2>
            <ul>
                {
                    this.state.empleados.map((empleado, index) => {
                        return (<li key={index}>{empleado.apellido} -- {empleado.oficio} -- {empleado.departamento}</li>)
                    })
                }
            </ul>
        </div>)
    }
}
