import { Avatar, Card, Skeleton, Switch, Row } from "antd";
import ForecastCards from "./ForecastCards";
import TodaysWeather from "./TodaysWeather";

const WeatherModule = ({ yahooWeather }) => {
  return (
    <Row className="moduleRow">
      <TodaysWeather yahooWeather={yahooWeather} />
      <ForecastCards yahooWeather={yahooWeather} />
    </Row>
  );
};

export default WeatherModule;
