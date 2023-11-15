import "./Home.css";
import React, { useState, useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';

function Home() {
    const [datos, setDatos] = useState([]);
    const [tipoAnimales, setTipoAnimales] = useState('lecheria');

    useEffect(() => {
        const fetchData = async () => {
            try {
                let url;
                if (tipoAnimales === 'corrales') {
                    url = 'http://127.0.0.1:8000/corrales';
                } else if (tipoAnimales === 'personas') {
                    url = 'http://127.0.0.1:8000/personas';
                } else {
                    url = `http://127.0.0.1:8000/animales/${tipoAnimales}`;
                }

                const response = await fetch(url);
                const data = await response.json();
                setDatos(data);
            } catch (error) {
                console.error('Error al obtener datos de la API', error);
            }
        };

        fetchData();
    }, [tipoAnimales]);

    const handleTipoAnimalesChange = (tipo) => {

        setTipoAnimales(tipo);
    };

    const formatFieldName = (fieldName) => {
        // Convierte la primera letra en mayúscula
        return fieldName.charAt(0).toUpperCase() + fieldName.slice(1);
    };

    return (
        <div className="contenedor">
            <aside>
                <h1>Fincapp</h1>
                <ul>
                    <li onClick={() => handleTipoAnimalesChange('lecheria')}>Lechería</li>
                    <li onClick={() => handleTipoAnimalesChange('genetica')}>Genética</li>
                    <li onClick={() => handleTipoAnimalesChange('engorde')}>Engorde</li>
                    <li onClick={() => handleTipoAnimalesChange('corrales')}>Corrales</li>
                    <li onClick={() => handleTipoAnimalesChange('personas')}>Personas</li>
                    {/* Agrega más opciones según sea necesario */}
                </ul>
            </aside>
            <main>
                <div className="contenedor_main">

                    <h2>
                        {tipoAnimales === 'lecheria'
                            ? 'Lechería'
                            : tipoAnimales === 'genetica'
                                ? 'Genética'
                                : tipoAnimales === 'engorde'
                                    ? 'Engorde'
                                    : tipoAnimales === 'corrales'
                                        ? 'Corrales'
                                        : 'Personas'}
                    </h2>


                    <div className='contenedor_tabla'>
                        <table>
                            <thead>
                                <tr>
                                    {tipoAnimales === 'corrales' ? (
                                        <>
                                            <th>{formatFieldName('id')}</th>
                                            <th>{formatFieldName('capacidad')}</th>
                                            <th>{formatFieldName('dimensión')}</th>
                                        </>
                                    ) : tipoAnimales === 'personas' ? (
                                        <>
                                            <th>{formatFieldName('id')}</th>
                                            <th>{formatFieldName('nombre')}</th>
                                            <th>{formatFieldName('apellido')}</th>
                                            <th>{formatFieldName('contacto')}</th>
                                            <th>{formatFieldName('área')}</th>
                                        </>
                                    ) : (
                                        <>
                                            <th>{formatFieldName('id')}</th>
                                            <th>{formatFieldName('raza')}</th>
                                            <th>{formatFieldName('peso')}</th>
                                            <th>{formatFieldName('cantidad')}</th>
                                            <th>{formatFieldName('edad')}</th>
                                            <th>{formatFieldName('corral')}</th>
                                        </>
                                    )}
                                </tr>
                            </thead>
                            <tbody>
                                {datos && datos.map((fila, index) => (
                                    <tr key={tipoAnimales === 'corrales' || tipoAnimales === 'personas' ? fila.id : index}>
                                        {tipoAnimales === 'corrales' ? (
                                            <>
                                                <td className="td-id">{fila[0]}</td>
                                                <td className="td-capacidad">{fila[1]}</td>
                                                <td className="td-dimension">{fila[2]}</td>
                                            </>
                                        ) : tipoAnimales === 'personas' ? (
                                            <>
                                                <td className="td-id">{fila[0]}</td>
                                                <td className="td-nombre">{fila[1]}</td>
                                                <td className="td-apellido">{fila[2]}</td>
                                                <td className="td-contacto">{fila[3]}</td>
                                                <td className="td-area">{fila[4]}</td>
                                            </>
                                        ) : (
                                            <>
                                                <td className="td-id">{fila[0]}</td>
                                                <td className="td-raza">{fila[1]}</td>
                                                <td className="td-Peso">{fila[2]} Kg</td>
                                                <td className="td-cantidad">{fila[11]} litros</td>
                                                <td className="td-edad">{fila[8]}</td>
                                                <td className="td-corral">{fila[12]}</td>
                                            </>
                                        )}
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
    );
}
export default Home;