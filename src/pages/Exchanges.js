import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Exchanges = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [requests, setRequests] = useState([]);

    const requestBook = async (e) => {
        e.preventDefault();
        if (title.trim() && author.trim()) {
            try {
                // Enviar solicitud para crear un libro
                await axios.post('/api/requests', { title, author });
                fetchRequests(); // Actualiza la lista de solicitudes
                setTitle('');
                setAuthor('');
            } catch (error) {
                console.error('Error requesting book:', error);
            }
        }
    };

    const fetchRequests = async () => {
        try {
            const response = await axios.get('/api/requests');
            console.log(response.data); // Verifica los datos
            setRequests(response.data);
        } catch (error) {
            console.error('Error fetching requests:', error);
        }
    };

    useEffect(() => {
        fetchRequests();
    }, []);

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        margin: 'auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: '#f9f9f9'
    };

    const inputStyle = {
        margin: '10px 0',
        padding: '10px',
        fontSize: '16px'
    };

    const buttonStyle = {
        padding: '10px',
        fontSize: '16px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        cursor: 'pointer'
    };

    const listStyle = {
        marginTop: '20px',
        listStyleType: 'none',
        padding: '0',
        width: '300px',
        margin: 'auto'
    };

    const listItemStyle = {
        padding: '10px',
        borderBottom: '1px solid #ddd'
    };

    return (
        <div>
            <form onSubmit={requestBook} style={formStyle}>
                <h2>Request a Book</h2>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Book Title"
                    style={inputStyle}
                />
                <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="Author"
                    style={inputStyle}
                />
                <button type="submit" style={buttonStyle}>Request Book</button>
            </form>

            <h2>List of Requests</h2>
            <ul style={listStyle}>
                {requests.length > 0 ? (
                    requests.map(request => (
                        <li key={request._id} style={listItemStyle}>
                            <span>{`Book: ${request.title}, Author: ${request.author}`}</span>
                        </li>
                    ))
                ) : (
                    <li style={listItemStyle}>No requests available.</li>
                )}
            </ul>
        </div>
    );
};

export default Exchanges;
