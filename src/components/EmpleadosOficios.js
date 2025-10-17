import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'

export default class EmpleadosOficios extends Component {
    urlEmpleados = Global.urlEmpleados;
    selectOficios = React.createRef();

    loadEmpleados = () => {
        let request = "api/Empleados"
        axios.get(this.urlEmpleados + request).then(response => {
            console.log("cargando empleados")
            this.setState({
                empleados: response.data
            })
        })
    }

    loadOficios = () => {
        let request = "api/Empleados"
        axios.get(this.urlEmpleados + request).then(response => {
            console.log("cargando oficios")
            this.setState({
                empleados: response.data
            })
            let aux = []
            for (const empleado of this.state.empleados) {
                let oficio = empleado.oficio
                if (!aux.includes(oficio)) {
                    aux.push(oficio)
                }
            }
            this.setState({
                oficios: aux
            })
        })
        console.log(this.state.oficios)
    }

    loadEmpleadosOficio = (event) => {
        event.preventDefault();
        let oficio = this.selectOficios.current.value;
        let request = "api/empleados/empleadosoficio/" + oficio;
        axios.get(this.urlEmpleados + request).then(response => {
            console.log(response.data)
            this.setState({
                filtrados: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadEmpleados();
        this.loadOficios();
    }

    state = {
        empleados: [],
        oficios: [],
        filtrados: null
    }

    render() {
        return (<div>
            <h1>Servicio empleados</h1>
            <label>Seleccione oficio </label>
            <select ref={this.selectOficios}>
                <option />
                {
                    this.state.oficios.map((oficio, index) => {
                        return (<option key={index}>{oficio}</option>)
                    })
                }
            </select>
            <button onClick={this.loadEmpleadosOficio}>Cargar empleados</button>
            {this.state.filtrados && (
                <table border="1">
                    <thead>
                        <tr>
                            <th>Apellido</th>
                            <th>Oficio</th>
                            <th>Salario</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.filtrados.map((persona, index) => {
                                return (<tr key={index}>
                                    <td>{persona.apellido}</td>
                                    <td>{persona.oficio}</td>
                                    <td>{persona.salario}</td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>)}
        </div>)
    }
}
