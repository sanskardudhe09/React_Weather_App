import React from 'react';
import styled from 'styled-components';
import { ForecastDisplayProps } from '../interface/weatherInterface';

const ForecastContainer = styled.div`
  color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
  margin-top: 8px;
  gap: 16px;
`;

const ForecastTitle = styled.h2`
  font-size: 24px;
  margin-top: 32px;
  text-align: center;
  color: white;
`;

const ForecastCard = styled.div`  
  background: rgba(255, 255, 255, 0.15);
  text-align: center;
  border-radius: 15px;
  width: 120px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  padding: 16px;
  @media screen and (max-width: 480px){
    width: 100px;
  }
`;

const ForecastInfo = styled.p`
  font-size: 14px;
  margin-bottom: 4px;
`;

const ForecastTemp = styled.p`
  font-size: 19px;
  margin-top: 4px;
  font-weight: bold;
`;

const ForecastDisplay: React.FC<ForecastDisplayProps> = ({ forecast, error }) => {
    if(error) return null;
    if(!forecast) return null;
    //Filtering out one forecast per Days for the next 5 days.
    const forecastPerDay = forecast.list.filter((item) => 
      item.dt_txt.includes("12:00:00")
    )
    return (
      <>
        <ForecastTitle>Weather Forecast</ForecastTitle>
        <ForecastContainer>
            {forecastPerDay.slice(0, 5).map((day, index) => {
                //forematting the time of date forecasted received from API in Readable manner
                const formattedDate = new Date(day.dt_txt).toLocaleDateString("en-US", {
                    weekday: "short",
                    month: "short",
                    day: "numeric"
                });
                return (
                    <ForecastCard key={index}>
                        <ForecastInfo>{formattedDate}</ForecastInfo>
                        <img src={`https://openweathermap.org/img/wn/${day.weather[0]?.icon}.png`}
                            alt={day.weather[0]?.main} width="50" />
                        <ForecastTemp>{day.main.temp}°</ForecastTemp>
                        <ForecastInfo>{day.weather[0]?.main}</ForecastInfo>
                    </ForecastCard>
                );
            })}
        </ForecastContainer>
      </>
    )
};
export default ForecastDisplay;
