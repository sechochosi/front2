import React, { useState } from 'react';

const Home = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipData, setTooltipData] = useState({});

  const handleButtonClick = (data) => {
    setTooltipData(data);
    setShowTooltip(true);
  };

  const handleCloseTooltip = () => {
    setShowTooltip(false);
    setTooltipData({});
  };

  const books = [
    // Fila 1
    {
      title: 'Título del Libro 1',
      author: 'Autor 1',
      isbn: '1234567890',
      description: 'Descripción del Libro 1',
      available: 'Sí',
      imageUrl: 'src/imagenes/book5',
      status: 'Nuevo',
      category: 'Categoría 1',
      publicationDate: '2024-01-01',
    },
    {
      title: 'Título del Libro 2',
      author: 'Autor 2',
      isbn: '0987654321',
      description: 'Descripción del Libro 2',
      available: 'No',
      imageUrl: '#',
      status: 'Usado',
      category: 'Categoría 2',
      publicationDate: '2024-02-01',
    },
    {
      title: 'Título del Libro 3',
      author: 'Autor 3',
      isbn: '1122334455',
      description: 'Descripción del Libro 3',
      available: 'Sí',
      imageUrl: '#',
      status: 'Nuevo',
      category: 'Categoría 3',
      publicationDate: '2024-03-01',
    },
    // Fila 2
    {
      title: 'Título del Libro 4',
      author: 'Autor 4',
      isbn: '6677889900',
      description: 'Descripción del Libro 4',
      available: 'Sí',
      imageUrl: '#',
      status: 'Nuevo',
      category: 'Categoría 4',
      publicationDate: '2024-04-01',
    },
    {
      title: 'Título del Libro 5',
      author: 'Autor 5',
      isbn: '4455667788',
      description: 'Descripción del Libro 5',
      available: 'No',
      imageUrl: '#',
      status: 'Usado',
      category: 'Categoría 5',
      publicationDate: '2024-05-01',
    },
    {
      title: 'Título del Libro 6',
      author: 'Autor 6',
      isbn: '9988776655',
      description: 'Descripción del Libro 6',
      available: 'Sí',
      imageUrl: '#',
      status: 'Nuevo',
      category: 'Categoría 6',
      publicationDate: '2024-06-01',
    },
    // Fila 3
    {
      title: 'Título del Libro 7',
      author: 'Autor 7',
      isbn: '2233445566',
      description: 'Descripción del Libro 7',
      available: 'Sí',
      imageUrl: '#',
      status: 'Nuevo',
      category: 'Categoría 7',
      publicationDate: '2024-07-01',
    },
    {
      title: 'Título del Libro 8',
      author: 'Autor 8',
      isbn: '3344556677',
      description: 'Descripción del Libro 8',
      available: 'No',
      imageUrl: '#',
      status: 'Usado',
      category: 'Categoría 8',
      publicationDate: '2024-08-01',
    },
    {
      title: 'Título del Libro 9',
      author: 'Autor 9',
      isbn: '5566778899',
      description: 'Descripción del Libro 9',
      available: 'Sí',
      imageUrl: '#',
      status: 'Nuevo',
      category: 'Categoría 9',
      publicationDate: '2024-09-01',
    },
  ];

  return (
    <section>
      <div style={bookContainerStyle}>
        {books.map((book, index) => (
          <div key={index} style={bookStyle}>
            <div style={imageContainerStyle}>
              {/* Espacio reservado para la imagen */}
              <div style={placeholderImageStyle}>
                <span style={placeholderTextStyle}>Imagen</span>
              </div>
            </div>
            <h4>{book.title}</h4>
            <button className="boton1" onClick={() => handleButtonClick(book)}>
              + Info
            </button>
          </div>
        ))}
      </div>

      {showTooltip && (
        <div className="tooltip" style={tooltipStyle}>
          <h4>{tooltipData.title}</h4>
          <p><strong>Autor:</strong> {tooltipData.author}</p>
          <p><strong>ISBN:</strong> {tooltipData.isbn}</p>
          <p><strong>Descripción:</strong> {tooltipData.description}</p>
          <p><strong>Disponible:</strong> {tooltipData.available}</p>
          <p><strong>Estado:</strong> {tooltipData.status}</p>
          <p><strong>Categoría:</strong> {tooltipData.category}</p>
          <p><strong>Fecha de Publicación:</strong> {tooltipData.publicationDate}</p>
          <button onClick={handleCloseTooltip}>Cerrar</button>
        </div>
      )}
    </section>
  );
};

const bookContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)', // 3 columnas
  gap: '20px',
  margin: '20px',
};

const bookStyle = {
  textAlign: 'center',
};

const imageContainerStyle = {
  border: '2px solid black',
  padding: '10px',
  marginBottom: '10px',
};

const placeholderImageStyle = {
  width: '100%',
  height: '200px', // Ajusta la altura según sea necesario
  backgroundColor: '#f0f0f0', // Color de fondo para el espacio reservado
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid #ccc',
};

const placeholderTextStyle = {
  color: '#888',
  fontSize: '18px',
};

const tooltipStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#fff',
  border: '1px solid #ccc',
  padding: '20px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  zIndex: 1000,
  maxWidth: '600px',
  overflowY: 'auto',
};

export default Home;
