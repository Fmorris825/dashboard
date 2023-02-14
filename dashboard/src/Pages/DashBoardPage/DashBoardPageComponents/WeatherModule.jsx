import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Skeleton, Switch } from "antd";
import { useState } from "react";
import showers from "../../../WeatherIcons/showers.png";
import LoadingTile from "./LoadingTile";

const { Meta } = Card;

const WeatherModule = ({ yahooWeather }) => {
  const [loading, setLoading] = useState(yahooWeather);
  // const onChange = (yahooWeather) => {
  //   setLoading(!yahooWeather);
  // };

  const weather = yahooWeather.current_observation;

  if (!yahooWeather) return <LoadingTile />;
  return (
    <>
      <Card
        style={{
          width: 300,
          marginTop: 16,
        }}
        // actions={[
        //   <SettingOutlined key="setting" />,
        //   <EditOutlined key="edit" />,
        //   <EllipsisOutlined key="ellipsis" />,
        // ]}
      >
        <Skeleton loading={!yahooWeather} avatar active>
          <Meta
            avatar={<Avatar src={showers} />}
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
        </Skeleton>
      </Card>
    </>
  );
};

export default WeatherModule;
