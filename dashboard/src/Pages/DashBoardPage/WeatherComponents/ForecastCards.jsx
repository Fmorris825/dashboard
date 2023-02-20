import { Card, Col, Row, Avatar } from "antd";
import { useState } from "react";
import Header from "../../../components/Header";
import ForecastCard from "./ForecastCard";
import WeatherModule from "./WeatherModule";

const ForecastCards = ({ yahooWeather }) => {
  return (
    <Row className="forecastCardsContainer Container ">
      <Row>
        <Header headerText="Weekly Forecast" />
      </Row>
      <Row>
        {yahooWeather.forecasts.map((forecast, i) => {
          return <ForecastCard forecast={forecast} />;
        })}
      </Row>
    </Row>
  );
};

export default ForecastCards;
