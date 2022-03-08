import React from "react";
import { ItemProvider } from "./ItemsContext";
import "./App.css";
import NavBar from "./Componentes/NavBar/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CartContext from "./Componentes/CartContext/CartContext";
import Nosotros from "./Views/Nosotros";
import Recetas from "./Views/Recetas";
import Categories from "./Views/Categories";
import Antojos from "./Views/Antojos";
import Contacto from "./Views/Contacto";
import CategoriesList from "./Views/CategoriesList";

const salmonColor = "salmon";

const App = () => {
  return (
    <ItemProvider>
      <Router>
        <div className="App">
          <NavBar color={salmonColor} />
          <CategoriesList/>
        </div>
        <Routes>
          <Route path="/" element={<Antojos />} />
          <Route path="/cart" element={<CartContext />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/recetas" element={<Recetas />} />
          <Route path="/categoria/:categoria" element={<Categories />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </Router>
      <div className="Antojos">
        <Antojos />
      </div>
    </ItemProvider>
  );
};

export default App;
