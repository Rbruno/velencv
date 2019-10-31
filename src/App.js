import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Header from './components/header';
import About from './components/about';
import Servicios from './components/servicios';
import Resumen from './components/resumen';
import Portfolio from './components/portfolio';
import Contacto from './components/contacto';
import Footer from './components/footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About />
      <Servicios />
      <Resumen />
      <Portfolio />
      <Contacto />
      <Footer />

    </div>
  );
}

export default App;
