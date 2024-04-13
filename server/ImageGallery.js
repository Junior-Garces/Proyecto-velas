// ImageGallery.js

import React, { useState, useEffect } from 'react';
import { Client } from 'ssh2-sftp-client';

const sftp = new Client();

function ImageGallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchImages() {
      try {
        await sftp.connect({
          host: 'http://pruebas.aurailuminatuvida.com',
          port: '2636',
          username: 'sftp_user',
          password: 'SFTPUSERPASSWORDHERE'
        });

        const files = await sftp.list('/uploads/imgProductos');
        const imagesData = await Promise.all(files.map(async file => {
          const data = await sftp.get(`/uploads/imgProductos/${file.name}`, false);
          const base64Data = Buffer.from(data).toString('base64');
          return {
            id: file.name,
            url: `data:image/jpg;base64,${base64Data}`
          };
        }));

        setImages(imagesData);
      } catch (error) {
        console.error('Error al obtener imágenes desde el servidor SFTP:', error);
      } finally {
        await sftp.end();
      }
    }

    fetchImages();

    return () => {
      // Limpiar recursos al desmontar el componente
      sftp.end();
    };
  }, []); // Se ejecutará solo una vez al montar el componente

  return (
    <div>
      {selectedImage && (
        <img src={selectedImage.url} alt={selectedImage.id} />
      )}
      <div>
        {images.map(image => (
          <img key={image.id} src={image.url} alt={image.id} onClick={() => handleImageClick(image)} />
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;