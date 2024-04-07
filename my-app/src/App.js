import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Productos from './productos';


function App() {
  return (
<BrowserRouter>

      <div>
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/productos">Productos</Link></li>
            <li><Link to="/Home">Home</Link></li>
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
          <Route exact path="/Home" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
        </Routes>
          <div className="page-container">
            <div className="container">
              <img src="/imagenes/imgProductos/ImgProducto1.jpg" alt="ImgProducto" />
              <h2>titutulo1</h2>
              <p> descripción1</p>
              <li><Link to="/productos">Productos</Link></li>

            </div>
            <div className="container">
              <img src="/imagenes/imgProductos/ImgProducto2.jpg" alt="ImgProducto" />
              <h2>titutulo2</h2>
              <p> descripción2</p>
              <li><Link to="/productos">Productos</Link></li>

            </div>
            <div className="container">
              <img src="/imagenes/imgProductos/ImgProducto3.jpg" alt="ImgProducto" />
              <h2>titutulo3</h2>
              <p> descripción3</p>
            </div>
            <div className="container">
              <img src="/imagenes/imgProductos/ImgProducto4.jpg" alt="ImgProducto" />
              <h2>titutulo4</h2>
              <p> descripción4</p>
            </div>
            <div className="container">
              <img src="/imagenes/imgProductos/ImgProducto5.jpg" alt="ImgProducto" />
              <h2>titutulo5</h2>
              <p> descripción5</p>
            </div>
            <div className="container">
              <img src="/imagenes/imgProductos/ImgProducto6.jpg" alt="ImgProducto" />
              <h2>titutulo6</h2>
              <p> descripción6</p>
            </div>
            <div className="container">
              <img src="/imagenes/imgProductos/ImgProducto7.jpg" alt="ImgProducto" />
              <h2>titutulo7</h2>
              <p> descripción7</p>
            </div>
            <div className="container">
              <img src="/imagenes/imgProductos/ImgProducto8.jpg" alt="ImgProducto" />
              <h2>titutulo8</h2>
              <p> descripción8</p>
            </div>
            <div className="container">
              <img src="/imagenes/imgProductos/ImgProducto9.jpg" alt="ImgProducto" />
              <h2>titutulo9</h2>
              <p> descripción9</p>
            </div>
            <div className="container">
              <img src="/imagenes/imgProductos/ImgProducto10.jpg" alt="ImgProducto" />
              <h2>titutulo10</h2>
              <p> descripción10</p>
            </div>
            <div className="container">
              <img src="/imagenes/imgProductos/ImgProducto11.jpg" alt="ImgProducto" />
              <h2>titutulo11</h2>
              <p> descripción11</p>
            </div>
            <div className="container">
              <img src="/imagenes/imgProductos/ImgProducto1.jpg" alt="ImgProducto" />
              <h2>titutulo12</h2>
              <p> descripción12</p>
            </div>
            <div className="container">
              <img src="/imagenes/imgProductos/ImgProducto2.jpg" alt="ImgProducto" />
              <h2>titutulo13</h2>
              <p> descripción13</p>
            </div>
          </div>
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
            <p> descripción</p>
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
