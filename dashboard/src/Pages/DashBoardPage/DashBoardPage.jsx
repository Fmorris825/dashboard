import { Progress, Space } from "antd";
import { useEffect, useState } from "react";
import WeatherModule from "./DashBoardPageComponents/WeatherModule";
import "./DashBoardPage.css";
import axios from "axios";

const DashBoardPage = ({ tasks, toDoList, completedList }) => {
  const completedPercentage = (completedList.length / tasks.length) * 100;
  const roundCompleted = completedPercentage.toFixed(0);
  const [toDo, setToDo] = useState(toDoList.length);
  const [yahooWeather, setYahooWeather] = useState(false);

  useEffect(() => {
    getWeather();
  }, []);

  async function getWeather() {
    try {
      const response = await axios.get(
        "https://yahoo-weather5.p.rapidapi.com/weather",
        {
          params: { location: "Irving", format: "json", u: "f" },
          headers: {
            "X-RapidAPI-Key":
              "e79d90cae2msh5521f68907c95b5p178094jsncb7add5f2fc5",
            "X-RapidAPI-Host": "yahoo-weather5.p.rapidapi.com",
          },
        }
      );
      setYahooWeather(response.data);
      if (response.status === 200) {
        console.log(response);
      }
    } catch (error) {
      console.log(error.response.data);
    }
  }

  return (
    <div>
      <WeatherModule yahooWeather={yahooWeather} />
      <Progress
        percent={roundCompleted}
        strokeColor={{
          "0%": "#108ee9",
          "100%": "#87d068",
        }}
      />
      <Progress
        percent={99.9}
        status="active"
        strokeColor={{
          from: "#108ee9",
          to: "#87d068",
        }}
      />
      <Space wrap>
        <Progress
          type="circle"
          percent={90}
          strokeColor={{
            "0%": "#108ee9",
            "100%": "#87d068",
          }}
        />
        <Progress
          type="circle"
          percent={100}
          strokeColor={{
            "0%": "#108ee9",
            "100%": "#87d068",
          }}
        />
      </Space>
    </div>
  );
};

export default DashBoardPage;
