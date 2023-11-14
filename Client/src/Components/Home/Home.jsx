
import React from 'react';


const [datos, setDatos] = useState();

useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/animales');
            const data = await response.json();
            setDatos(data);
        } catch (error) {
            console.error('Error al obtener datos de la API', error);
        }
    };

    fetchData();
}, []);

console.log(datos)
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
                                <th>Id</th>
                                <th>Raza</th>
                                <th>Cantidad</th>
                                <th>Edad</th>
                                <th>Corral</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>A1</td>
                                <td>Holstein</td>
                                <td>25 litros</td>
                                <td>35 meses</td>
                                <td>C1</td>
                                <EditIcon />
                            </tr>
                            <tr>
                                <td>A1</td>
                                <td>Holstein</td>
                                <td>25 litros</td>
                                <td>35 meses</td>
                                <td>C1</td>
                                <EditIcon />
                            </tr>
                            <tr>
                                <td>A1</td>
                                <td>Holstein</td>
                                <td>25 litros</td>
                                <td>35 meses</td>
                                <td>C1</td>
                                <EditIcon />
                            </tr>
                            <tr>
                                <td>A1</td>
                                <td>Holstein</td>
                                <td>25 litros</td>
                                <td>35 meses</td>
                                <td>C1</td>
                                <EditIcon />
                            </tr>



                        </tbody>
                    </table>
                </div>
                <button>Agregar</button>

            </div>

        </main>
    </div>
);


export default Home;

