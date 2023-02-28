import { Avatar, Card, Skeleton, Switch, Row } from "antd";
import ForecastCards from "./ForecastCards";
import TodaysWeather from "./TodaysWeather";

import showers from "../../../WeatherIcons/Showers.png";
import cloudy from "../../../WeatherIcons/Cloudy.png";
import mostlyCloudy from "../../../WeatherIcons/MostlyCloudy.png";
import mostlySunny from "../../../WeatherIcons/MostlySunny.png";
import partlyCloudy from "../../../WeatherIcons/PartlyCloudy.png";
import scatteredShowers from "../../../WeatherIcons/ScatteredShowers.png";
import sunny from "../../../WeatherIcons/Sunny.png";
import thunderstorms from "../../../WeatherIcons/Thunderstorms.png";
import clear from "../../../WeatherIcons/Clear.png";
import windy from "../../../WeatherIcons/Windy.png";

const WeatherModule = ({ yahooWeather }) => {
  return (
    <Row className="moduleRow">
      <TodaysWeather yahooWeather={yahooWeather} />
      <ForecastCards yahooWeather={yahooWeather} />
    </Row>
  );
};

export default WeatherModule;
