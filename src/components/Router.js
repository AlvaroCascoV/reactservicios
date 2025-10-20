import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import NotFound from './NotFound'
import TablaMultiplicar from './TablaMultiplicar'
import { useParams } from 'react-router-dom'

export default class Router extends Component {
    render() {
        function TablaMultiplicarElement() {
            //ESTA FUNCION NOS SERVIRA PARA CAPTURAR LOS PARAMETROS 
            //RECIBIDOS EN UNA RUTA Y ENVIARLOS CON props A NUESTRO COMPONENT
            //VOY A ENVIAR UN PARAMETRO LLAMADO minumero
            let { minumero } = useParams();
            //DEVOLVEMOS EL COMPONENTE TablaMultiplicar CON SUS props
            return <TablaMultiplicar numero={minumero} />
        }
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/tabla/:minumero" element={<TablaMultiplicarElement />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        )
    }
}
