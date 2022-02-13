import React from 'react';
import './App.css';
import NavBar from './Componentes/NavBar/NavBar';
// import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
// import VeganCookies from "./Componentes/Imagenes/VeganCookies.png";
// import Alfajorcitos from "./Componentes/Imagenes/Alfajorcitos.png";
import fotoAlfajorcitos from "./Componentes/Imagenes/fotoAlfajorcitos.png";
// import BoxPersonalizado from "./Componentes/Imagenes/BoxPersonalizado.png";
import DetailContainer from './Views/DetailContainer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer'
import Categories from './Views/Categories'
const salmonColor = "salmon";

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar color={salmonColor} />
        {/* <div className="Antojos">
          <ItemListContainer className="Productos"
          greetings='Opción 1'
          img={VeganCookies}
          cardTitle='Vegan Cookies'
          cardDescription='Deliciosas cookies con chips de "chocolate" 100% veganas'
        />
        <ItemListContainer className="Productos"
          greetings='Opción 2'
          img={Alfajorcitos}
          cardTitle='Alfajorcitos'
          cardDescription='Alfajorcitos de masa sablee con dulce de leche, espolvoreados con azúcar impalpable'
        />
        <ItemListContainer className="Productos"
          greetings='Opción 3'
          img={BoxPersonalizado}
          cardTitle='Boxes'
          cardDescription='Cajas personalizables para regalar o regalarte!'
        />
        </div> */}
        <img src={fotoAlfajorcitos} alt="Alfajorcitos" />
      </div>
      <Routes>
        <Route path="/" element={<ItemDetailContainer />} />
        <Route path="/categories/:login" element={<Categories />} />
        <Route path="/detail/:id" element={<DetailContainer />} />
      </Routes>
    </Router >
  );
};

export default App;
