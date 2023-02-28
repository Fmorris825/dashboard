import { Progress, Space } from "antd";
import Header from "../../../components/Header";

const ProgressModule = ({ list }) => {
  return (
    <div className="Container progressContainer">
      <Header headerText="Task Progress" />
      <Progress
        percent={list}
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
      </Space>{" "}
    </div>
  );
};

export default ProgressModule;
