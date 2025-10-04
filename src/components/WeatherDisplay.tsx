import React from "react";
import styled from "styled-components";
import { capitalize } from "../utils/util";
import { WeatherDisplayProps } from "../interface/weatherInterface";

const WeatherContainer = styled.div`
  margin-top: 32px;
  width: 85%;
  max-width: 400px;
  background-color: rgba(255, 255, 255, 0.15);
  padding: 16px 32px;
  color: white;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
`;

const CityInfo = styled.h2`
   font-size: 28px;
   margin-bottom: 3px;
`;

const TempInfo = styled.p`
  font-size: 48px;
  font-weight: bold;
  margin: 3px 0;
`;

const Info = styled.p<{color?: string}>`
   font-size: 24px;
   margin: 24px 0; 
   font-weight: bold;
   color: ${(props) => props.color || 'white'};
`;

const TempMinMax = styled.div`  
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-bottom: 8px;
  font-weight: bold;
  @media screen and (max-width: 480px){
    gap: 16px;
    flex-direction: column;
  }
`;

const MinMaxItem = styled.span`
  font-size: 16px;
`
const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ data, loading, error}) => {
    if(!data && loading) return <Info>Loading...</Info>
    if(error) return <Info color='#f87171'>{error}</Info>
    if(!data) return null;
    return (
        <WeatherContainer>
            <CityInfo>{data.name}</CityInfo>
            <img src={`https://openweathermap.org/img/wn/${data.weather[0]?.icon}@2x.png`}
              alt={data.weather[0]?.main} width="90" />
            <TempInfo>{data.main.temp.toFixed(1)} °</TempInfo>
            {data.weather[0]?.description && <Info>{capitalize(data.weather[0]?.description)}</Info>}
            <TempMinMax>
              <MinMaxItem>Min: {data.main?.temp_min.toFixed(1)}°</MinMaxItem>
              <MinMaxItem>Max: {data.main?.temp_max.toFixed(1)}°</MinMaxItem>
            </TempMinMax>
            <Info>Humidity: {data.main.humidity}%</Info>

        </WeatherContainer>
    );

};
export default WeatherDisplay;