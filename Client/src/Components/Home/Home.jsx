// Home.jsx
import React from 'react';
import "./Home.css";
import Header from '../Header/Header';
import Footer from './../Footer/Footer';
import Forms from '../Login/Forms'; // Ajusta la ruta según tu estructura de carpetas

const Home = () => {
    return (
        <>
            <Header />
            
            <Forms />

            <Footer />
        </>
    );
}

export default Home;

