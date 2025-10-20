import React, { Component } from 'react'
import Alumnos from './Alumnos'
import Global from '../../Global'
import axios from 'axios';

export default class Cursos extends Component {
    selectCurso = React.createRef();
    url = Global.urlAlumnos;
    loadCursos = () => {
        let request = "cursos";
        axios.get(this.url + request).then(response => {
            console.log("leyendo cursos")
            this.setState({
                cursos: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadCursos();
    }

    cambiaCurso = (event) => {
        event.preventDefault();
        let cursoSeleccionado = this.selectCurso.current.value
        this.setState({
            cursoSeleccionado: cursoSeleccionado
        })
    }

    detallesAlumno = (idAlumno) => {
        // Buscar el alumno por su ID en la lista de alumnos del curso seleccionado
        let request = "findalumno/" + idAlumno;
        axios.get(this.url + request).then(response => {
            console.log("leyendo alumno" + idAlumno)
            this.setState({
                alumnoSeleccionado: response.data
            });
        });
    }

    state = {
        cursos: [],
        cursoSeleccionado: "",
        alumnoSeleccionado: null
    }
    render() {
        return (<div>
            <h1>Cursos Component</h1>
            <form>
                <select ref={this.selectCurso} onChange={this.cambiaCurso} value={this.state.cursoSeleccionado}>
                    <option>Selecciona un curso</option>
                    {
                        this.state.cursos.map((curso, index) => {
                            return (<option key={index} value={curso}>{curso}</option>)
                        })
                    }
                </select>
            </form>
            {this.state.alumnoSeleccionado && (
                <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
                    <h2>Detalles del Alumno</h2>
                    <p><strong>ID:</strong> {this.state.alumnoSeleccionado.idAlumno}</p>
                    <p><strong>Nombre:</strong> {this.state.alumnoSeleccionado.nombre} {this.state.alumnoSeleccionado.apellidos}</p>
                    <img style={{ width: '100px', height: '100px' }} src={this.state.alumnoSeleccionado.imagen} alt="Foto del alumno" />
                </div>
            )}
            <Alumnos idCurso={this.state.cursoSeleccionado} alumnoSelec={this.detallesAlumno} />


        </div>)
    }
}
