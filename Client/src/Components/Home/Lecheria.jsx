import "./Home.css"
import React, { useState, useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import Aside from './Aside';

function Lecheria() {

    const [datos, setDatos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://127.0.0.1:8000/animales/lecheria");
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
                    <h2>Lecheria</h2>
                    <div className='contenedor_tabla'>
                        <table>
                            <thead>
                                <tr key={"tr"}>
                                    <th>Id</th>
                                    <th>Raza</th>
                                    <th>Peso</th>
                                    <th>Cantidad</th>
                                    <th>Edad</th>
                                    <th>Corral</th>
                                </tr>
                            </thead>
                            <tbody>
                                {datos && datos.map((fila, index) => (
                                    <tr key={index.id}>
                                        <td className="td-id">{fila[0]}</td>
                                        <td className="td-nombre">{fila[1]}</td>
                                        <td className="td-apellido">{fila[2]}</td>
                                        <td className="td-contacto">{fila[3]}</td>
                                        <td className="td-area">{fila[4]}</td>
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

export default Lecheria