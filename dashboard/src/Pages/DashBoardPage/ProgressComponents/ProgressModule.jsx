import { Progress, Space } from "antd";

const ProgressModule = ({ roundCompleted }) => {
  return (
    <div className="progressModuleContainer">
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
      </Space>{" "}
    </div>
  );
};

export default ProgressModule;
