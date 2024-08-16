import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ExchangeDetail = () => {
    const [exchange, setExchange] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchExchange = async () => {
            try {
                const response = await axios.get(`/api/exchanges/${id}`);
                setExchange(response.data);
            } catch (error) {
                console.error('Error fetching exchange details:', error);
            }
        };

        fetchExchange();
    }, [id]);

    if (!exchange) return <div>Loading...</div>;

    return (
        <div>
            <h1>Exchange Details</h1>
            <p><strong>Book:</strong> {exchange.title}</p>
            <p><strong>Author:</strong> {exchange.author}</p>
            <p><strong>Status:</strong> {exchange.status}</p>
            {/* Agrega más detalles según el modelo de tu intercambio */}
        </div>
    );
};

export default ExchangeDetail;
