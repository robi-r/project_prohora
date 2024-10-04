import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FloodDataComponent = () => {
    const [floodData, setFloodData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFloodData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/');
                setFloodData(response.data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchFloodData();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Flood Data</h1>
            <ul>
                {floodData.map((event, index) => (
                    <li key={index}>
                        Location: {event.location.name}, Water Level: {event.water_level}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FloodDataComponent;


