import React, { Component } from 'react'
import axios from 'axios';

export default class ServiceApiSuppliers extends Component {
    cajaId = React.createRef();
    url = "https://services.odata.org/V4/Northwind/Northwind.svc/Suppliers";
    loadSuppliers = () => {
        console.log("Antes del servicio")
        axios.get(this.url).then(response => {
            console.log("leyendo")
            this.setState({
                suppliers: response.data.value
            })
        })
        console.log("Despues del servicio")
    }
    cargarPorId = (event) => {
        event.preventDefault();
        this.setState({
            id: this.cajaId.current.value
        })
        this.state.suppliers.map((supplier, index) => {
            if (supplier.SupplierID === this.state.id) { return (console.log("id: "+supplier.SupplierID)) }
        })
    }
    componentDidMount = () => {
        console.log("componente")
        this.loadSuppliers();
    }
    state = {
        suppliers: [],
        id: 0,
        supplierByID: []
    }
    render() {
        return (<div>
            <h1>Servicio Suppliers</h1>
            <form>
                <label>Introduzca ID a buscar: </label>
                <input type='text' ref={this.cajaId} />
                <button onClick={this.cargarPorId}>Buscar</button>
                <ul></ul>
                <ul>
                    {
                        this.state.suppliers.map((supplier, index) => {
                            return (<li key={index}>ID: {supplier.SupplierID}; Nombre: {supplier.ContactName}</li>)
                        })
                    }
                </ul>
            </form>
        </div>)
    }
}
