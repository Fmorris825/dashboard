import { useEffect, useState } from "react";
import WeatherModule from "./WeatherComponents/WeatherModule";
import "./DashBoardPage.css";
import ProgressModule from "./ProgressComponents/ProgressModule";
import LoadingTile from "./DashBoardPageComponents/LoadingTile";
import NewsModule from "./NewsComponents/NewsModule";
import GreetingHeader from "../../components/GreetingHeader";
import { Row } from "antd";

const DashBoardPage = ({
  tasks,
  toDoList,
  completedList,
  yahooWeather,
  news,
}) => {
  const completedPercentage = (completedList.length / tasks.length) * 100;
  const roundCompleted = completedPercentage.toFixed(0);
  const [toDo, setToDo] = useState(toDoList.length);

  if (!yahooWeather || !news) {
    return (
      <div className="loadingContainer">
        <LoadingTile />
      </div>
    );
  }
  return (
    <div>
      <GreetingHeader />
      <WeatherModule yahooWeather={yahooWeather} />
      <Row className="moduleRow">
        <ProgressModule roundCompleted={roundCompleted} toDo={toDo} />
        <NewsModule news={news} />
      </Row>
    </div>
  );
};

export default DashBoardPage;
