import { Card, Col, Row, Avatar } from "antd";
import { useState } from "react";
import ForecastCard from "./ForecastCard";
import WeatherModule from "./WeatherModule";

const ForecastCards = ({ yahooWeather }) => {
  return (
    <Row className="forecastCardsContainer">
      {yahooWeather.forecasts.map((forecast, i) => {
        return <ForecastCard forecast={forecast} />;
      })}
    </Row>
  );
};

export default ForecastCards;
