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
  console.log(yahooWeather);
  if (!yahooWeather) return <LoadingTile />;
  return (
    <>
      <Card
        style={{
          width: 300,
          marginTop: 16,
        }}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Skeleton loading={!yahooWeather} avatar active>
          <Meta
            avatar={<Avatar src={showers} />}
            title={"Weather for  " + yahooWeather.location.city}
            description="This is the description"
          />
        </Skeleton>
      </Card>
    </>
  );
};

export default WeatherModule;
