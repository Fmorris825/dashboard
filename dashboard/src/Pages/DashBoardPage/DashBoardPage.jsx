import { useEffect, useState } from "react";
import WeatherModule from "./WeatherComponents/WeatherModule";
import "./DashBoardPage.css";
import ProgressModule from "./ProgressComponents/ProgressModule";
import LoadingTile from "./DashBoardPageComponents/LoadingTile";
import SectionHeader from "../../components/SectionHeader";
import NewsModule from "./NewsComponents/NewsModule";

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
    return <LoadingTile />;
  }
  return (
    <div>
      <SectionHeader header="Hello, Fred" />
      <WeatherModule yahooWeather={yahooWeather} />
      <ProgressModule roundCompleted={roundCompleted} toDo={toDo} />
      <NewsModule news={news} />
    </div>
  );
};

export default DashBoardPage;
