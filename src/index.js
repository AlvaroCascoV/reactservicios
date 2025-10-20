import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import EmpleadosOficios from './components/EmpleadosOficios';
// import EmpleadosOficiosSolucion from './components/EmpleadosOficiosSolucion';
// import ServiciosApiCustomers from './components/ServiciosApiCustomers';
// import ServiceApiSuppliers from './components/ServiceApiSuppliers';
// import ServiceApiSuppliersSolucion from './components/ServiceApiSuppliersSolucion';
// import EmpleadosDepartamento from './components/EmpleadosDepartamento';
import Departamentos from './components/maestrodetalle/Departamentos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <ServiciosApiCustomers />
  // <ServiceApiSuppliers />
  // <ServiceApiSuppliersSolucion/>
  // <EmpleadosDepartamento/>
  // <EmpleadosOficios/>
  // <EmpleadosOficiosSolucion/>
  <Departamentos/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
