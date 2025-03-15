// src/App.js
import React from 'react';
import './App.css';
import './componentes/Post.css'; 
import Post from './componentes/Post';
import logo from './imagenes/logo.png';

function App() {
    return (
        <div className="App">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Mi Mini Blog</h1>
            <Post title="Primera Memoria Tecnica" content="Este es el primer contenido" />
            <Post title="Segunda Memoria Tecnica" content="Aquí va el contenido del segundo." />
        </div>
    );
}

export default App;
