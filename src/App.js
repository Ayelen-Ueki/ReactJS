import React from 'react';
import './App.css';
import NavBar from './Componentes/NavBar/NavBar';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import VeganCookies from "./Componentes/Imagenes/VeganCookies.png";
import Alfajorcitos from "./Componentes/Imagenes/Alfajorcitos.png";
import BoxPersonalizado from "./Componentes/Imagenes/BoxPersonalizado.png";

const salmonColor = "salmon";

const App = () => {
    return (
    <div className="App">
      <NavBar color={salmonColor} />
      <div className="Antojos">
        <ItemListContainer className="Productos"
          img={VeganCookies}
          cardTitle='Vegan Cookies'
          cardDescription='Deliciosas cookies con chips de "chocolate" 100% veganas'
        />
        <ItemListContainer className="Productos"
          img={Alfajorcitos}
          cardTitle='Alfajorcitos'
          cardDescription='Alfajorcitos de masa sablee con dulce de leche, espolvoreados con azúcar impalpable'
        />
        <ItemListContainer className="Productos"
          img={BoxPersonalizado}
          cardTitle='Boxes'
          cardDescription='Cajas personalizables para regalar o regalarte!'
        />
      </div>
    </div>
  );
};

export default App;
