import React from 'react';
import './App.css';
import NavBar from './Componentes/NavBar';

const yellowColor = "yellow";

const App = () => {
  return (
    <div className="App">
      <NavBar color={yellowColor} 
      img='./Imagenes/Logo.png'
      />
    </div>
  );
};

export default App;
