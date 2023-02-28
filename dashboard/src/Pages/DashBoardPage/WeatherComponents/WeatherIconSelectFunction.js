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
import windy from "../../../WeatherIcons/Windy.png";

function iconFilter(forecast) {
  let icon = null;
  if (forecast === "Cloudy") {
    icon = cloudy;
  } else if (forecast === "Mostly Cloudy") {
    icon = mostlyCloudy;
  } else if (forecast === "Mostly Sunny") {
    icon = mostlySunny;
  } else if (forecast === "Partly Cloudy") {
    icon = partlyCloudy;
  } else if (forecast === "Scattered Showers") {
    icon = scatteredShowers;
  } else if (forecast === "Showers" || forecast === "Rain") {
    icon = showers;
  } else if (forecast === "Sunny") {
    icon = sunny;
  } else if (forecast === "Thunderstorms") {
    icon = thunderstorms;
  } else if (forecast === "Windy") {
    icon = windy;
  } else if (
    forecast === "Clear" ||
    forecast === "Mostly Clear" ||
    forecast === "Fair"
  ) {
    icon = clear;
  } else icon = null;
  console.log(icon);
  return icon;
}
export default { iconFilter };
