import React, { useState } from 'react';
import "./Forms.css";

class Forms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            loginSuccess: false,
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch('http://localhost:8000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nombre: this.state.username,
                    apellido: this.state.password,
                }),
            });
    
            // Agrega el siguiente console.log
            console.log("Cuerpo de la solicitud:", JSON.stringify({ nombre: this.state.username, apellido: this.state.password }));
    
            if (response.ok) {
                const data = await response.json();
                console.log("Inicio de sesión exitoso:", data);
                this.setState({ loginSuccess: true });
                // Puedes manejar la lógica de redireccionamiento o cualquier otra acción
            } else {
                console.error('Error al iniciar sesión');
            }
        } catch (error) {
            console.error('Error de red:', error);
        }
    };
    
    render() {
        return (
            <div className="forms-container">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Usuario:
                        <input
                            type="text"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br />
                    <label>
                        Contraseña:
                        <input
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br />
                    <div className="forgot-password">
                        <a href="#">¿Olvidaste tu contraseña?</a>
                    </div>
                    <br />
                    <button type="submit">Iniciar sesión</button>
                </form>
                {this.state.loginSuccess && <p>Inicio de sesión exitoso</p>}
            </div>
        );
    }
}

export default Forms;
