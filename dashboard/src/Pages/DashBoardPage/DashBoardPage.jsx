import { useEffect, useState } from "react";
import WeatherModule from "./WeatherComponents/WeatherModule";
import "./DashBoardPage.css";
import ProgressModule from "./ProgressComponents/ProgressModule";
import LoadingTile from "./DashBoardPageComponents/LoadingTile";
import SectionHeader from "../../components/SectionHeader";

const DashBoardPage = ({ tasks, toDoList, completedList, yahooWeather }) => {
  const completedPercentage = (completedList.length / tasks.length) * 100;
  const roundCompleted = completedPercentage.toFixed(0);
  const [toDo, setToDo] = useState(toDoList.length);

  if (!yahooWeather) {
    return <LoadingTile />;
  }
  return (
    <div>
      <SectionHeader header="Hello, Fred" />
      <WeatherModule yahooWeather={yahooWeather} />
      <ProgressModule roundCompleted={roundCompleted} toDo={toDo} />
    </div>
  );
};

export default DashBoardPage;
