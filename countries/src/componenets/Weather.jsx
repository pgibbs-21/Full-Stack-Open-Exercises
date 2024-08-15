import { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherComponent = ({ country }) => {
    const city = country.capital[0];
    const lat = country.capitalInfo.latlng[0];
    const lon = country.capitalInfo.latlng[1];
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

    console.log(lat, lon);

    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        // Replace 'city-name' with the actual city you want to query
        const fetchWeatherData = async () => {
            try {
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
                );

                setWeatherData(response.data);
            } catch (error) {
                console.error('Error fetching the weather data:', error);
            }
        };

        fetchWeatherData();
    }, [city, apiKey]);

    console.log(weatherData);

    if (!weatherData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Weather in {country.capital[0]}</h2>
            <p>Temperature: {Math.round(weatherData.main.temp - 273.15)}°C</p>
            <p>Wind Speed: {weatherData.wind.speed}</p>
        </div>
    );
};

export default WeatherComponent;

// <p>Wind Speed: {weatherData.wind.speed}</p>
//             <img src={weatherData.current.condition.icon} alt='Weather icon' />
