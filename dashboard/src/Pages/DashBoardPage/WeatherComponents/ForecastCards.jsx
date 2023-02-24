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
        {yahooWeather.forecasts.map((forecast, key) => {
          return <ForecastCard forecast={forecast} index={key} />;
        })}
      </Row>
    </Row>
  );
};

export default ForecastCards;
