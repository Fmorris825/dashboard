import { Progress, Space } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";

const DashBoardPage = ({ tasks, toDoList, completedList }) => {
  const [completed, setCompleted] = useState(completedList.length);
  const completedPercentage = (completed / tasks.length) * 100;
  const roundCompleted = completedPercentage.toFixed(0);
  const [toDo, setToDo] = useState(toDoList.length);
  return (
    <>
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
    </>
  );
};

export default DashBoardPage;
