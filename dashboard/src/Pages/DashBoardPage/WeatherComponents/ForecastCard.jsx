import { Card, Avatar } from "antd";

//Icon Imports
import showers from "../../../WeatherIcons/Showers.png";
import cloudy from "../../../WeatherIcons/Cloudy.png";
import mostlyCloudy from "../../../WeatherIcons/MostlyCloudy.png";
import mostlySunny from "../../../WeatherIcons/MostlySunny.png";
import partlyCloudy from "../../../WeatherIcons/PartlyCloudy.png";
import scatteredShowers from "../../../WeatherIcons/ScatteredShowers.png";
import sunny from "../../../WeatherIcons/Sunny.png";
import thunderstorms from "../../../WeatherIcons/Thunderstorms.png";
import clear from "../../../WeatherIcons/Clear.png";

const { Meta } = Card;

const ForecastCard = ({ forecast }) => {
  let icon = false;
  if (forecast.text === "Cloudy") {
    icon = cloudy;
  } else if (forecast.text === "Mostly Cloudy") {
    icon = mostlyCloudy;
  } else if (forecast.text === "Mostly Sunny") {
    icon = mostlySunny;
  } else if (forecast.text === "Partly Cloudy") {
    icon = partlyCloudy;
  } else if (forecast.text === "Scattered Showers") {
    icon = scatteredShowers;
  } else if (forecast.text === "Showers" || forecast.text === "Rain") {
    icon = showers;
  } else if (forecast.text === "Sunny") {
    icon = sunny;
  } else if (forecast.text === "Thunderstorms") {
    icon = thunderstorms;
  } else if (forecast.text === "Clear" || forecast.text === "Mostly Clear") {
    icon = clear;
  } else icon = null;
  return (
    <Card bordered={false} className="forecastCards">
      <Meta
        avatar={<Avatar src={icon} />}
        title={forecast.day}
        className="cardMeta"
      />
      <p>
        {forecast.text} <br />
        Hi: {forecast.high}, Lo: {forecast.low}
      </p>
    </Card>
  );
};

export default ForecastCard;
