import "./Formulario.css"
import React, { useState } from 'react';

const Formulario = ({ onClose, onAgregar }) => {
  const [id, setId] = useState('');
  const [raza, setRaza] = useState('');
  const [peso, setPeso] = useState('');
  const [color, setColor] = useState('');
  const [sexo, setSexo] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [fechaIngreso, setFechaIngreso] = useState('');
  const [cantidadLeche, setCantidadLeche] = useState('');
  const [corralId, setCorralId] = useState('');
  const categoria = 'Lecheria'; // Valor por defecto




  const handleAgregar = () => {
    // Aquí podrías realizar validaciones y luego enviar los datos al servidor
    if (!id || !raza || !peso || !color || !sexo || !fechaNacimiento || !fechaIngreso || !cantidadLeche || !corralId) {
      alert("Por favor, complete todos los campos.");
      return;
    }
    const nuevoAnimal = {
      id,
      raza,
      peso,
      color,
      sexo,
      fechaNacimiento,
      fechaIngreso,
      edadActual: calcularEdadActual(fechaNacimiento),
      categoria,
      cantidadLeche,
      corralId,
    };

    // Llama a la función onAgregar pasando el nuevoAnimal
    onAgregar(nuevoAnimal);

    // Cierra el formulario
    onClose();
  };

  const calcularEdadActual = (fechaNacimiento) => {
    // Implementa la lógica para calcular la edad actual
    // Puedes utilizar una biblioteca como moment.js o realizar cálculos con JavaScript
    // En este ejemplo, se asume que la fecha de nacimiento está en el formato 'YYYY-MM-DD'
    const fechaNac = new Date(fechaNacimiento);
    const hoy = new Date();
    const edad = hoy.getFullYear() - fechaNac.getFullYear();
    // Ajusta la edad si aún no ha pasado el cumpleaños este año
    if (hoy.getMonth() < fechaNac.getMonth() || (hoy.getMonth() === fechaNac.getMonth() && hoy.getDate() < fechaNac.getDate())) {
      return edad - 1;
    }
    return edad;
  };

  return (
    <div className="formulario-container">
      <h3>Agregar Nuevo Animal</h3>
      <form>
        {/* Campo de ID */}
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" value={id} onChange={(e) => setId(e.target.value)} />

        {/* Campo de Raza */}
        <label htmlFor="raza">Raza:</label>
        <input type="text" id="raza" value={raza} onChange={(e) => setRaza(e.target.value)} />

        {/* Campo de Peso */}
        <label htmlFor="peso">Peso:</label>
        <input type="number" id="peso" value={peso} onChange={(e) => setPeso(e.target.value)} />

        {/* Campo de Color */}
        <label htmlFor="color">Color:</label>
        <input type="text" id="color" value={color} onChange={(e) => setColor(e.target.value)} />

        {/* Campo de Sexo */}
        <label htmlFor="sexo">Sexo:</label>
        <select id="sexo" value={sexo} onChange={(e) => setSexo(e.target.value)}>
          <option value="M">Masculino</option>
          <option value="F">Femenino</option>
        </select>

        {/* Campo de Fecha de Nacimiento */}
        <label htmlFor="fechaNacimiento">Fecha de Nacimiento:</label>
        <input type="date" id="fechaNacimiento" value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} />

        {/* Campo de Fecha de Ingreso */}
        <label htmlFor="fechaIngreso">Fecha de Ingreso:</label>
        <input type="date" id="fechaIngreso" value={fechaIngreso} onChange={(e) => setFechaIngreso(e.target.value)} />

        {/* Campo de Categoría */}
        <label htmlFor="categoria">Categoría:</label>
        <input type="text" id="categoria" value={categoria} readOnly />

        {/* Campo de Cantidad de Leche */}
        <label htmlFor="cantidadLeche">Cantidad de Leche:</label>
        <input type="number" id="cantidadLeche" value={cantidadLeche} onChange={(e) => setCantidadLeche(e.target.value)} />
        {/* Campo de Corral ID */}
        <label htmlFor="corralId">Corral ID:</label>
        <input type="number" id="corralId" value={corralId} onChange={(e) => setCorralId(e.target.value)} />

        <button className="agregar" type="button" onClick={handleAgregar}>Agregar</button>
        <button className="cancelar" type="button" onClick={onClose}>Cancelar</button>
      </form>
    </div>
  );
};

export default Formulario;