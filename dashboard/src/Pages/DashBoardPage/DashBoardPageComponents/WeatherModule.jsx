import { Avatar, Card, Skeleton, Switch, Row } from "antd";
import { useState } from "react";
import ForecastCards from "./ForecastCards";
import LoadingTile from "./LoadingTile";

//Icon Imports
import showers from "../../../WeatherIcons/Showers.png";
import cloudy from "../../../WeatherIcons/Cloudy.png";
import mostlyCloudy from "../../../WeatherIcons/MostlyCloudy.png";
import mostlySunny from "../../../WeatherIcons/MostlySunny.png";
import partlyCloudy from "../../../WeatherIcons/PartlyCloudy.png";
import scatteredShowers from "../../../WeatherIcons/ScatteredShowers.png";
import sunny from "../../../WeatherIcons/Sunny.png";
import thunderstorms from "../../../WeatherIcons/Thunderstorms.png";

const { Meta } = Card;

const WeatherModule = ({ yahooWeather }) => {
  // const [loading, setLoading] = useState(yahooWeather);
  // const onChange = (yahooWeather) => {
  //   setLoading(!yahooWeather);
  // };

  const weather = yahooWeather.current_observation;
  let icon = false;
  if (weather.condition.text === "Cloudy") {
    icon = cloudy;
  } else if (weather.condition.text === "Mostly Cloudy") {
    icon = mostlyCloudy;
  } else if (weather.condition.text === "Mostly Sunny") {
    icon = mostlySunny;
  } else if (weather.condition.text === "Partly Cloudy") {
    icon = partlyCloudy;
  } else if (weather.condition.text === "Scattered Showers") {
    icon = scatteredShowers;
  } else if (weather.condition.text === "Showers") {
    icon = showers;
  } else if (weather.condition.text === "Sunny") {
    icon = sunny;
  } else if (weather.condition.text === "Thunderstorms") {
    icon = thunderstorms;
  } else icon = null;
  // if (!weather.condition) return null;
  if (!yahooWeather) return <LoadingTile />;
  return (
    <Row className="weatherModule">
      <Card loading={false} className="todayCard" bordered={false}>
        <Meta
          avatar={<Avatar src={icon} />}
          className="bigCardMeta"
          title={
            "Weather for  " +
            yahooWeather.location.city +
            " (" +
            yahooWeather.forecasts[0].day +
            ")"
          }
          description={
            weather.condition.text +
            " | " +
            "Temp: " +
            weather.condition.temperature +
            " °F"
          }
        />
        <div className="detailsContainer">
          <p className="weatherDetails">
            Forecast: {yahooWeather.forecasts[0].text}, Hi:{" "}
            {yahooWeather.forecasts[0].high} - Lo:{" "}
            {yahooWeather.forecasts[0].low}
          </p>
          <p className="weatherDetails">
            Sunrise: {weather.astronomy.sunrise} - Sunset:{" "}
            {weather.astronomy.sunset}{" "}
          </p>
          <p className="weatherDetails">
            Humdity: {weather.atmosphere.humidity} - Windchill:{" "}
            {weather.wind.chill}
          </p>
        </div>
      </Card>
      <ForecastCards yahooWeather={yahooWeather} />
    </Row>
  );
};

export default WeatherModule;
