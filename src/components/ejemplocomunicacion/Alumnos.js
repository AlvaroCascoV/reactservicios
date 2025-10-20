import React, { Component } from 'react'
import Global from '../../Global'
import axios from 'axios';

export default class Alumnos extends Component {
    url = Global.urlAlumnos;
    loadAlumnos = () => {
        if (this.props.idCurso && this.props.idCurso !== "") {
            let request = "filtrarcurso/" + this.props.idCurso;
            axios.get(this.url + request).then(response => {
                console.log("leyendo alumnos")
                this.setState({
                    alumnos: response.data
                })
            })
        }
    }

    componentDidMount = () => {
        this.loadAlumnos();
    }

    componentDidUpdate = (oldProps) => {
        console.log("Current: " + this.props.idCurso);
        console.log("Old: " + oldProps.idCurso);
        if (oldProps.idCurso !== this.props.idCurso) {
            this.loadAlumnos();
        }
    }

    mostrarDetalles = (idAlumno) => {
        console.log("detalles de: " + idAlumno)
        if (this.props.alumnoSelec) {
            this.props.alumnoSelec(idAlumno);
        }
    }

    state = {
        alumnos: []
    }
    render() {
        return (<div>
            <h1>Alumnos Component {this.props.idCurso}</h1>
            <ul>
                {
                    this.state.alumnos.map((alumno, index) => {
                        return (<div key={index}>
                            <li>{alumno.nombre} {alumno.apellidos}</li>
                            <button onClick={() => { this.mostrarDetalles(alumno.idAlumno) }}>Detalles</button>
                        </div>)
                    })
                }
            </ul>
        </div>)
    }
}
