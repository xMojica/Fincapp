import React from 'react'
import { useNavigate } from 'react-router-dom'

import { useAuth0 } from "@auth0/auth0-react";
import "./Home.css"

function Aside() {
    const navigate = useNavigate();
    const { logout } = useAuth0();
    return (
        <aside>
            <h1>Fincapp</h1>
            <ul>
                <li onClick={() => { navigate("/lecheria") }}>Lechería</li>
                <li onClick={() => { navigate("/genetica") }}>Genética</li>
                <li onClick={() => { navigate("/engorde") }}>Engorde</li>
                <li onClick={() => { navigate("/corrales") }}>Corrales</li>
                <li onClick={() => { navigate("/personas") }}>Personas</li>
                <li onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                    Salir
                </li>
            </ul>
        </aside>
    )
}

export default Aside