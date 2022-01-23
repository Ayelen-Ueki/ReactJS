import React, {Component} from 'react';
import './App.css';
import NavBar from './Componentes/NavBar';

const yellowColor = "yellow";

class App extends Component {
  render(){
  return (
    <div className="App">
      <NavBar color={yellowColor} />
    </div>
  );};
};

export default App;
