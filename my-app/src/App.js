import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
// Componentes de las páginas
import Productos from './productos';
import { Plantilla, Section1, Section2, Section3 } from './Home';
function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/productos">Productos</Link></li>
            <li><Link to="/section1">section1</Link></li>
            <li><Link to="/section2">section2</Link></li>
            <li><Link to="/section3">section3</Link></li>
            <li><Link to="/Plantilla">plantilla</Link></li>
          </ul>
        </nav>
        <header>
          <div className="logo img">
            <Link to="/">
              <img src="/imagenes/vela-logo.jpeg" alt="Logo de la empresa" />
            </Link>
          </div>
          <div className="titulo">
            <h1>VELAS ANDREA </h1>
          </div>
          <div className="buscar">
            <input type="text" placeholder="Buscar..." />
            <img src="/imagenes/LUPA.png" alt="img lupa" />
          </div>
        </header>
        <main>
          {/* Definición de las rutas */}
          <Routes>
            <Route path="/productos" element={<Productos />} />
            <Route path="/section1" element={<Section1 />} />
            <Route path="/section2" element={<Section2 />} />
            <Route path="/section3" element={<Section3 />} />
            <Route path="/plantilla" element={<Plantilla />} />

          </Routes>

          <div className="containerWhatsapp">
            <a href="https://wa.me/+573022573054">
              <img src="/imagenes/WhatsApp_Logo.jpg" alt="img whatsapp" />
            </a>
          </div>
          <div id="Inicio">
            <h1>inicio </h1>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
              Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.
              Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.
              Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.
            </p>
          </div>
          <div id="Acerca">
            <h1>ACERCA </h1>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
              Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.
              Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.
              Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
              Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.
              Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.
              Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.
            </p>
          </div>
          <div id="Servicios">
            <h1>Servicios </h1>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
              Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.
              Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.
              Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
              Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.
              Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.
              Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.
            </p>
          </div>
          <div id="Contacto">
            <h1>Contacto </h1>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
              Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.
              Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.
              Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
              Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.
              Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.
              Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.
            </p>
          </div>
        </main>
        <footer className="footer-container">
          <div className="bloques-footer">
            <h3>Contáctanos</h3>
            <div  className="container-imgwhatsappfooter">
            <div className="imgwhatsappfooter">
            <a href="https://wa.me/+573022573054">
              <img src="/imagenes/imgwhatsappfooter.png" alt="img whatsapp" />
            </a>
          </div>
          <div className="imgwhatsappfooter">
            <a href="https://wa.me/+573022573054">
              <img src="/imagenes/imginstagramfooter.png" alt="img whatsapp" />
            </a>
          </div>
          </div>
          </div>
          <div className="bloques-footer">
            <h3>Síguenos</h3>
            <p> descripción</p>
          </div>
          <div className="bloques-footer">
            <h3>Enlaces</h3>
            <p> descripción</p>
          </div>
          <div className="bloques-footer">
            <h3>Políticas</h3>
            <p> descripción</p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
