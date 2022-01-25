import React from 'react';
import './App.css';
import NavBar from './Componentes/NavBar';

const salmonColor = "salmon";

const App = () => {
  return (
    <div className="App">
      <NavBar color={salmonColor} 
      img='./Imagenes/Logo.png'
      />
    </div>
  );
};

export default App;
