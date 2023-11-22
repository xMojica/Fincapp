import "./Home.css"
import React, { useState, useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import Aside from './Aside';

function Personas() {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://127.0.0.1:8000/personas");
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
                    <h2>Personas</h2>
                    <div className='contenedor_tabla'>
                        <table>
                            <thead>
                                <tr key={"person"} >
                                    <th>Id</th>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Contacto</th>
                                    <th>Cargo</th>
                                </tr>
                            </thead>
                            <tbody>
                                {datos && datos.map((fila, index) => (
                                    <tr key={index.id}>
                                        <td className="td-id">{fila[0]}</td>
                                        <td className="td-nombre">{fila[1]}</td>
                                        <td className="td-apellido">{fila[2]}</td>
                                        <td className="td-apellido">{fila[3]}</td>
                                        <td className="td-apellido">{fila[4]}</td>
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
            </main>
        </div>
    )
}

export default Personas



