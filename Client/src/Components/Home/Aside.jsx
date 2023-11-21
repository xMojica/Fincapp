import React from 'react'
import { useNavigate } from 'react-router-dom'

function Aside() {
    const navigate = useNavigate();
    return (
        <aside>
            <h1>Fincapp</h1>
            <ul>
                <li onClick={() => { navigate("/lecheria") }}>Lechería</li>
                <li onClick={() => { navigate("/genetica") }}>Genética</li>
                <li onClick={() => { navigate("/engorde") }}>Engorde</li>
                <li onClick={() => { navigate("/corrales") }}>Corrales</li>
                <li onClick={() => { navigate("/personas") }}>Personas</li>
            </ul>
        </aside>
    )
}

export default Aside