import React from 'react';
import './App.css';
// Componentes de las páginas

function Plantilla() {
  return <div>
    <main>
      <div className="producto-container">
        <div className="image-container">
          <img src="/imagenes/vela-logo.jpeg" alt="Producto" />
        </div>
        <div className="miniaturas-container">
          <img src="/imagenes/imgProductos/ImgProducto2.jpg" alt="miniatura 1"/>
          <img src="/imagenes/imgProductos/ImgProducto3.jpg" alt="miniatura 2"/>
          <img src="/imagenes/imgProductos/ImgProducto4.jpg" alt="miniatura 3"/>
        </div>
        <div className="info-container">
          <h2>Título Producto</h2>
          <p>Precio: $XX.XX</p>
          <button>Comprar</button>
          <p>Detalles del Producto:</p>
          <p>Descripción detallada del producto...
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
              Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.
              Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.
              Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis,
          </p>
        </div>
      </div>
    </main>
  </div>;
}

function Section1() {
  return <div>
    <main>
      <div className="page-container">
        <div className="container">
          <img src="/imagenes/imgProductos/ImgProducto1.jpg" alt="ImgProducto" />
          <h2>titutulo1</h2>
          <p> descripción1</p>
        </div>
      </div>
    </main>
  </div>;
}

function Section2() {
  return <div>
    <main>
      <div className="page-container">
        <div className="container">
          <img src="/imagenes/imgProductos/ImgProducto1.jpg" alt="ImgProducto" />
          <h2>titutulo2</h2>
          <p> descripción2</p>
        </div>
      </div>
    </main>
  </div>;
}

function Section3() {
  return <div>
    <main>
      <div className="page-container">
        <div className="container">
          <img src="/imagenes/imgProductos/ImgProducto1.jpg" alt="ImgProducto" />
          <h2>titutulo3</h2>
          <p> descripción3</p>
        </div>
      </div>
    </main>
  </div>;
}

export { Plantilla, Section1, Section2, Section3 };
