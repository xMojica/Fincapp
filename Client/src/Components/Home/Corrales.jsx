import "./Home.css"
import React, { useState, useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import Aside from './Aside';

function Corrales() {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://127.0.0.1:8000/corrales");
                const data = await response.json();
                setDatos(data);

            } catch (error) {
                console.error('Error al obtener datos de la API', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="contenedor">
            <Aside />
            <main>
                <div className="contenedor_main">
                    <h2>Corrales</h2>
                    <div className='contenedor_tabla'>
                        <table>
                            <thead>
                                <tr key={"corral"} >
                                    <th>Id</th>
                                    <th>Capacidad</th>
                                    <th>Dimension</th>
                                </tr>
                            </thead>
                            <tbody>
                                {datos && datos.map((fila, index) => (
                                    <tr key={index.id}>
                                        <td className="td-id">{fila[0]}</td>
                                        <td className="td-nombre">{fila[1]} animales</td>
                                        <td className="td-nombre">{fila[2]}</td>
                                        <td>
                                            <div className="icono-edicion">
                                                <EditIcon />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <button className="boton-agregar">Agregar</button>
                </div>
            </main >
        </div >
    )
}

export default Corrales