import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import ForecastDisplay from './components/ForecastDisplay';
import { WeatherData, ForecastData } from './interface/weatherInterface';

const API_KEY = process.env.REACT_APP_API_KEY;

const MainContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom right, #5689c8, #3a74f1);
  font-family: "Poppins", sans-serif;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 40px;
  text-align: center;
  color: white;
  margin-top: 48px; 
`;

const App:React.FC = () => {
  const [city, setCity] = useState(() => localStorage.getItem('lastCity') || "");
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [forecastData, setForecastData] = useState<ForecastData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = useCallback(async (cityName: string) => {
    try {
      setLoading(true);
      console.log(API_KEY);
      setError(null);
      let response;
      response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`);
      const weatherRes = await response.json();
      if(!response.ok) throw new Error(weatherRes.message || 'City Not Found');
      response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric`);
      const forecastRes = await response.json();
      setWeatherData(weatherRes);
      setForecastData(forecastRes);
      setCity(cityName);
      localStorage.setItem('lastCity', cityName);
    } catch (error: any) {
      setError(error.message)
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if(city) fetchWeather(city);
  }, [city, fetchWeather]);

  return (
   <MainContainer>
    <Title>Weather App</Title>
    <SearchBar onSearch={fetchWeather}/>
    <WeatherDisplay data={weatherData} loading={loading} error={error} />
    {weatherData && <ForecastDisplay forecast={forecastData} error={error}/>}
   </MainContainer>
  );
}

export default App;
