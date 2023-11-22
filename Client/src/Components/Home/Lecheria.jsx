import "./Home.css"
import React, { useState, useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import Aside from './Aside';
import Formulario from '../Form/Formulario'; // Importa el componente del formulario


function Lecheria() {

    const [datos, setDatos] = useState([]);
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const [band, setBand] = useState(false);
    const [posicion, setPosicion] = useState();

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

    const handleAgregar = (nuevoAnimal) => {
        // Implementa la lógica para agregar el nuevo animal a la lista o enviarlo al servidor
        // Por ejemplo, podrías hacer una solicitud POST al servidor
        // y luego actualizar la lista de datos con el nuevo animal
        setDatos([...datos, nuevoAnimal]);

        axios.put("http://127.0.0.1:8000/animales/lecheria", nuevoAnimal)
            .then(response => {
                console.log('PUT request successful:', response.data);
            })
            .catch(error => {
                console.error('Error making PUT request:', error);
            });

    };



    return (
        <div className="contenedor">
            <Aside />
            <main>
                <div className="contenedor_main">
                    <h2>Lecheria</h2>
                    <div className='contenedor_tabla'>
                        <table>
                            <thead>
                                <tr key={"Lecheria"}>
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
                                        <td className="td-apellido">{fila[2]} Kg</td>
                                        <td className="td-contacto">{fila[11]} Litros</td>
                                        <td className="td-contacto">{fila[8]}</td>
                                        <td className="td-area">{fila[12]}</td>
                                        <td>
                                            <div className="icono-edicion" onClick={() => {
                                                setMostrarFormulario(true);
                                                setBand(true)
                                                setPosicion(index)
                                            }} >
                                                <EditIcon />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <button className="boton-agregar" onClick={() => {
                        setMostrarFormulario(true)
                        setBand(false)
                    }}>Agregar</button>
                    {mostrarFormulario && (
                        <Formulario
                            onClose={() => setMostrarFormulario(false)}
                            onAgregar={handleAgregar}
                            bandera={band}
                            objeto={datos[posicion]}
                        />
                    )}
                </div>
            </main >
        </div >
    )


}

export default Lecheria