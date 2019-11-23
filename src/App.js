import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

//router
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//components
import Navbar from './components/navbar';
import Header from './components/header';
import About from './components/about';
import Servicios from './components/servicios';
import Resumen from './components/resumen';
import Portfolio from './components/portfolio';
import Cuadros from './components/cuadros';
import Footer from './components/footer';
import Reel from './components/reel'
//import CargaImagenes from './components/Controllers/carga';
//import Cargacuadros from './components/Controllers/carga_cuadros';


function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/">
          <Navbar/>
          <Header/>
          <About />
          <Servicios />
          <Resumen />
          <Reel />
          <Portfolio />
          <Cuadros />
          <Footer />
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
