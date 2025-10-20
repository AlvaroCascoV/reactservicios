import React, { Component } from 'react'

export default class Collatz extends Component {

    state = {
        numero: 0,
        secuencia: []
    }

    generarSecuenciaCollatz = () => {
        let aux = [];
        let numero = parseInt(this.props.numero);
        aux.push(numero);
        while (numero !== 1) {
            if (numero % 2 === 0) {
                numero = numero / 2;
            } else {
                numero = 3 * numero + 1;
            }
            aux.push(numero);
        }
        this.setState({
            secuencia: aux
        })
    }
    componentDidMount = () => {
        this.generarSecuenciaCollatz();
    }

    render() {
        return (<div>
            <h1>Collatz</h1>
            <h3 style={{ color: "fuchsia" }}> Numero: {this.props.numero} </h3>
            <ul>
                {
                    this.state.secuencia.map((num, index) => {
                        return (<li key={index}>{num}</li>)
                    })
                }
            </ul>
        </div>)
    }
}
