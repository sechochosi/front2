import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ExchangeList = () => {
    const [exchanges, setExchanges] = useState([]);
    const navigate = useNavigate();

    const fetchExchanges = async () => {
        try {
            const response = await axios.get('/api/exchanges');
            setExchanges(response.data);
        } catch (error) {
            console.error('Error fetching exchanges:', error);
        }
    };

    useEffect(() => {
        fetchExchanges();
    }, []);

    const viewDetails = (id) => {
        navigate(`/exchanges/${id}`);
    };

    return (
        <div>
            <h2>List of Exchanges</h2>
            <ul>
                {exchanges.length > 0 ? (
                    exchanges.map(exchange => (
                        <li key={exchange._id}>
                            <span>{`Book: ${exchange.title}, Author: ${exchange.author}`}</span>
                            <button onClick={() => viewDetails(exchange._id)}>View Details</button>
                        </li>
                    ))
                ) : (
                    <li>No exchanges available.</li>
                )}
            </ul>
        </div>
    );
};

export default ExchangeList;
