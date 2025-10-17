import React, { Component } from 'react'
import axios from 'axios';

export default class ServiceApiSuppliersSolucion extends Component {
    cajaId = React.createRef();
    urlSuppliers = "https://services.odata.org/V4/Northwind/Northwind.svc/Suppliers"
    state = {
        proveedores: [],
        supplier: null
    }

    loadSuppliers = () => {
        axios.get(this.urlSuppliers).then(response => {
            console.log("Leyendo")
            this.setState({
                proveedores: response.data.value
            })
        })
    }

    findSupplierId = (event) => {
        event.preventDefault();
        let idSupplier = parseInt(this.cajaId.current.value)
        //REALIZAMOS LA PETICION DE NUEVO A TODOS LOS PROVEEDORES
        axios.get(this.urlSuppliers).then(response => {
            console.log("Buscando...");
            for (var supplier of response.data.value) {
                if (supplier.SupplierID === idSupplier) {
                    this.setState({
                        supplier: supplier
                    })
                    break;
                }
            }
        })
    }
    componentDidMount = () => {
        this.loadSuppliers();
    }

    render() {
        return (<div>
            <h1>Service Api Suppliers Solucion</h1>
            <form>
                <label>Buscar ID </label>
                <input type='number' ref={this.cajaId} />
                <button onClick={this.findSupplierId}>Buscar Proveedor</button>
            </form>
            {
                this.state.supplier &&
                (<div>
                    <h1>Company: {this.state.supplier.CompanyName}</h1>
                    <h2>Title: {this.state.supplier.ContactTitle}</h2>
                    <h2>Direccion: {this.state.supplier.Address}</h2>
                </div>)
            }
            <ul>
                {
                    this.state.proveedores.map((supplier, index) => {
                        return (<li key={index}>ID: {supplier.SupplierID} - {supplier.ContactName}</li>)
                    })

                }
            </ul>
        </div>)
    }
}
