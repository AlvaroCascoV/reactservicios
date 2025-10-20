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
// import Departamentos from './components/maestrodetalle/Departamentos';
// import Cursos from './components/ejemplocomunicacion/Cursos';
// import TablaMultiplicar from './components/TablaMultiplicar';
import Router from './components/Router';
import MenuRutas from './components/MenuRutas';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <ServiciosApiCustomers />
  // <ServiceApiSuppliers />
  // <ServiceApiSuppliersSolucion/>
  // <EmpleadosDepartamento/>
  // <EmpleadosOficios/>
  // <EmpleadosOficiosSolucion/>
  // <Departamentos/>
  // <Cursos />
  // <TablaMultiplicar numero="7" />
  <div style={{ margin: "auto", width: "50%" }}>
    <MenuRutas />
    <Router />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
