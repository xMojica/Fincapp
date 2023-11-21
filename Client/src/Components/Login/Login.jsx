import React, { useEffect } from 'react';
import LoginButton from './LoginButton';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const { isAuthenticated } = useAuth0();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/lecheria");
        }
    }, [isAuthenticated, navigate]);

    return (
        <div>
            <LoginButton />
        </div>
    );
}

export default Login;
