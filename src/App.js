import React from "react";
import { ItemProvider } from "./ItemsContext";
import "./App.css";
import NavBar from "./Componentes/NavBar/NavBar";
import ItemDetail from "./Componentes/ItemDetail/ItemDetail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CartContext from "./Componentes/CartContext/CartContext";
import Nosotros from "./Views/Nosotros";
import Recetas from "./Views/Recetas";

const salmonColor = "salmon";

const App = () => {
  return (
    <ItemProvider>
      <Router>
        <div className="App">
          <NavBar color={salmonColor} />
          <div className="Antojos">
            <ItemDetail/>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<ItemDetail />} />
          <Route path="/Cart" element={<CartContext/>} />
          <Route path="/Nosotros" element={<Nosotros/>} />
          <Route path="/Recetas" element={<Recetas/>} />
        </Routes>
      </Router>
    </ItemProvider>
  );
};

export default App;
