import React from 'react';
import {ItemProvider} from './ItemsContext';
import './App.css';
import NavBar from './Componentes/NavBar/NavBar';
import ItemDetail from './Componentes/ItemDetail/ItemDetail';
import VeganCookies from "./Componentes/Imagenes/VeganCookies.png";
import Alfajorcitos from "./Componentes/Imagenes/Alfajorcitos.png";
// import fotoAlfajorcitos from "./Componentes/Imagenes/fotoAlfajorcitos.png";
import BoxPersonalizado from "./Componentes/Imagenes/BoxPersonalizado.png";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CartContext from './Views/CartContext';
const salmonColor = "salmon";



const App = () => {
  return (
    <Router>
    <ItemProvider>
      <div className="App"> 
        <NavBar color={salmonColor} />
        <div className="Antojos"> 
          <ItemDetail className="Productos"
          greetings='Opción 1'
          img={VeganCookies}
          cardDescription='Deliciosas cookies con chips de "chocolate" 100% veganas'
        />
        <ItemDetail className="Productos"
          greetings='Opción 2'
          img={Alfajorcitos}
          cardDescription='Alfajorcitos de masa sablee con dulce de leche, espolvoreados con azúcar impalpable'
        />
        <ItemDetail className="Productos"
          greetings='Opción 3'
          img={BoxPersonalizado}
          cardDescription='Cajas personalizables para regalar o regalarte!'
        />
        {/* </div>
        {/* <img src={fotoAlfajorcitos} alt="Alfajorcitos" /> */}
        {/* <div> */}
        </div>
      </div>
    </ItemProvider>
      
<Routes>
        <Route path="/" element={<ItemDetail />} />
        <Route path="/cart" element={<CartContext />} />
      </Routes>
</Router >
  );
};

export default App;
