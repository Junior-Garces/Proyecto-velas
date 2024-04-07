import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';

// Componentes de las páginas
import Home from './Home';
import Productos from './productos';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/Home">Inicio</Link>
            </li>
            <li>
              <Link to="/productos">Productos</Link>
            </li>
          </ul>
        </nav>

        {/* Definición de las rutas */}
        <Routes>
          <Route exact path="/Home" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
