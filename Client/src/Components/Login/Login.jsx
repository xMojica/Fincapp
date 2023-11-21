import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import "./../Login/login.css"


function Login() {
    const { isAuthenticated } = useAuth0();
    const navigate = useNavigate();
    const { loginWithRedirect } = useAuth0();

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/lecheria");
        }
    }, [isAuthenticated, navigate]);

    return (
        <div id='div-iniciar' >
            <button className="log" onClick={() => loginWithRedirect()}>Iniciar</button>
        </div>
    );
}

export default Login;
