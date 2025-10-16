import React, { Component } from 'react'
import axios from 'axios';

export default class ServiceApiSuppliers extends Component {
    cajaId = React.createRef();
    state = {
        suppliers: [],
        proveedor: null
    }
    url = "https://services.odata.org/V4/Northwind/Northwind.svc/Suppliers";
    
    loadSuppliers = () => {
        console.log("Antes del servicio")
        axios.get(this.url).then(response => {
            console.log("Leyendo servicio");
            this.setState({
                suppliers: response.data.value
            })
        })
        console.log("Después del servicio")
    }

    cargarPorId = (event) => {
        event.preventDefault();
        const idSelec = parseInt(this.cajaId.current.value);
        let proveedor = null;
        
        for (let i = 0; i < this.state.suppliers.length; i++) {
            if (this.state.suppliers[i].SupplierID === idSelec) {
                proveedor = this.state.suppliers[i];
                break;
            }
        }
        
        this.setState({
            proveedor: proveedor
        })
    }

    componentDidMount = () => {
        console.log("Creando component");
        this.loadSuppliers();
    }

    render() {
        return (<div>
            <h1>Servicio Suppliers</h1>
            <form>
                <label>Introduzca ID a buscar: </label>
                <input type='text' ref={this.cajaId} />
                <button onClick={this.cargarPorId}>Buscar</button>
            </form>
            
            {this.state.proveedor && (
                <div>
                    <h3 style={{ color: "green" }}>Proveedor Encontrado:</h3>
                    <h4>ID: {this.state.proveedor.SupplierID}</h4>
                    <h4>Nombre: {this.state.proveedor.ContactName}</h4>
                    <h4>Empresa: {this.state.proveedor.CompanyName}</h4>
                </div>
            )}

            <h3>Lista de Proveedores:</h3>
            {
                this.state.suppliers.map((supplier, index) => {
                    return (<h3 key={index} style={{ color: "blue" }}>
                        ID: {supplier.SupplierID} - {supplier.ContactName}
                    </h3>)
                })
            }
        </div>)
    }
}
