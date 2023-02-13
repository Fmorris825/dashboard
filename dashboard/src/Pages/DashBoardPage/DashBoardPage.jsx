import { Progress, Space } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { TaskContext } from "../TasksPage/TasksPage";
// import(TaskContext);

const DashBoardPage = ({ tasks }) => {
  const [progress, setProgress] = useState(tasks.length);

  return (
    <>
      <Progress
        percent={progress}
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
