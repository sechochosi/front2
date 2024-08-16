import React, { useState } from 'react';

const Home = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipData, setTooltipData] = useState({});
  const [books, setBooks] = useState([
    {
      title: 'Título del Libro 1',
      author: 'Autor 1',
      isbn: '1234567890',
      description: 'Descripción del Libro 1',
      available: 'Sí',
      imageUrl: '#',
      status: 'Nuevo',
      category: 'Categoría 1',
      publicationDate: '2024-01-01',
    },
    // Otros libros iniciales...
  ]);
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    isbn: '',
    description: '',
    available: 'Sí',
    imageUrl: '',
    status: 'Nuevo',
    category: '',
    publicationDate: '',
  });

  const handleButtonClick = (data) => {
    setTooltipData(data);
    setShowTooltip(true);
  };

  const handleCloseTooltip = () => {
    setShowTooltip(false);
    setTooltipData({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook({
      ...newBook,
      [name]: value,
    });
  };

  const handleAddBook = () => {
    setBooks([...books, newBook]);
    setNewBook({
      title: '',
      author: '',
      isbn: '',
      description: '',
      available: 'Sí',
      imageUrl: '',
      status: 'Nuevo',
      category: '',
      publicationDate: '',
    });
  };

  return (
    <section>
      <div style={bookContainerStyle}>
        {books.map((book, index) => (
          <div key={index} style={bookStyle}>
            <img className="imagen5" src={book.imageUrl} alt="Portada" style={imageStyle}/>
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

      <div style={formStyle}>
        <h3>Añadir Nuevo Libro</h3>
        <input 
          type="text" 
          name="title" 
          placeholder="Título" 
          value={newBook.title} 
          onChange={handleInputChange} 
          style={inputStyle}
        />
        <input 
          type="text" 
          name="author" 
          placeholder="Autor" 
          value={newBook.author} 
          onChange={handleInputChange} 
          style={inputStyle}
        />
        <input 
          type="text" 
          name="isbn" 
          placeholder="ISBN" 
          value={newBook.isbn} 
          onChange={handleInputChange} 
          style={inputStyle}
        />
        <textarea 
          name="description" 
          placeholder="Descripción" 
          value={newBook.description} 
          onChange={handleInputChange} 
          style={inputStyle}
        />
        <input 
          type="text" 
          name="imageUrl" 
          placeholder="URL de la Imagen" 
          value={newBook.imageUrl} 
          onChange={handleInputChange} 
          style={inputStyle}
        />
        <input 
          type="text" 
          name="status" 
          placeholder="Estado (Nuevo/Usado)" 
          value={newBook.status} 
          onChange={handleInputChange} 
          style={inputStyle}
        />
        <input 
          type="text" 
          name="category" 
          placeholder="Categoría" 
          value={newBook.category} 
          onChange={handleInputChange} 
          style={inputStyle}
        />
        <input 
          type="date" 
          name="publicationDate" 
          placeholder="Fecha de Publicación" 
          value={newBook.publicationDate} 
          onChange={handleInputChange} 
          style={inputStyle}
        />
        <button onClick={handleAddBook} style={buttonStyle}>Añadir Libro</button>
      </div>
    </section>
  );
};

const bookContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  margin: '20px',
};

const bookStyle = {
  width: '150px',
  margin: '10px 20px',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  textAlign: 'center',
};

const imageStyle = {
  width: '100%',
  height: 'auto',
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

const formStyle = {
  margin: '20px auto',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  backgroundColor: '#f9f9f9',
  display: 'flex',
  flexDirection: 'column',
  width: '300px',
};

const inputStyle = {
  marginBottom: '10px',
  padding: '8px',
  borderRadius: '4px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  padding: '10px',
  borderRadius: '4px',
  border: 'none',
  backgroundColor: '#007bff',
  color: '#fff',
  cursor: 'pointer',
};

export default Home;
