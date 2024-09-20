import React, { useState } from 'react';
import './card.css'

function WeatherDisplay() {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [city, setCity] = useState('');

    const fetchWeatherData = async () => {
        setLoading(true);
        setError(null);

        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 5000);

            const response = await fetch(`http://localhost:5000/weather/${city}`, { signal: controller.signal });
            clearTimeout(timeoutId); 

            if (!response.ok) {
                throw new Error(alert('please enter a city'));
            }

            const data = await response.json();
            setWeatherData({
                temp: data.temp,
                conditions: data.conditions,
            });
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchWeatherData();
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className='form'>
                <input 
                    className='form-location'
                    type="text" 
                    placeholder="Enter city" 
                    value={city} 
                    onChange={(e) => setCity(e.target.value)} 
                    required 
                />
                <button className='btn' type="submit">Get Weather</button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {weatherData && (
                <div className='weather-data'>
                    <p>Temperature: {weatherData.temp}°C</p>
                    <p>Conditions: {weatherData.conditions}</p>
                </div>
            )}
        </div>
    );
}

export default WeatherDisplay;
