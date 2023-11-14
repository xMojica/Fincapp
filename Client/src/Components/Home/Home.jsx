import "./Home.css"
import React from 'react';
import { useState, useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';

function Home() {

    const [datos, setDatos] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/animales/lecheria');
                const data = await response.json();
                setDatos(data);
            } catch (error) {
                console.error('Error al obtener datos de la API', error);
            }
        };

        fetchData();
    }, []);

    // console.log(datos)
    return (
        <div className="contenedor">

            <aside>
                <h1>Fincapp</h1>
                <ul>
                    <li>Lechería</li>
                    <li>Genética</li>
                    <li>Engorde</li>
                    <li>Corrales</li>
                    <li>Personal</li>
                    <li>Ventas</li>
                    <li>Rentabilidad</li>
                </ul>
            </aside>
            <main>
                <div className="contenedor_main">
                    <h1>Lechería</h1>
                    <div className='contenedor_tabla'>
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Raza</th>
                                    <th>Peso</th>
                                    <th>Cantidad</th>
                                    <th>Edad</th>
                                    <th>Corral</th>

                                </tr>
                            </thead>
                            <tbody>
                                {datos && datos.map((fila, index) => (
                                    <tr key={index}>
                                        <td className="td-id">{fila[0]}</td>
                                        <td className="td-raza">{fila[1]}</td>
                                        <td className="td-Peso">{fila[2]} Kg</td>
                                        <td className="td-cantidad">{fila[11]} litros</td>
                                        <td className="td-edad">{fila[8]}</td>
                                        <td className="td-corral">{fila[12]}</td>
                                        <td>
                                            <EditIcon />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>
                    <button>Agregar</button>

                </div>

            </main>
        </div>
    );
}

export default Home;

