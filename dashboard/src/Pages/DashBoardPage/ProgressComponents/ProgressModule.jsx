import { Progress, Space, Card, Col, Row, Statistic } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

import Header from "../../../components/Header";
import StatisticCard from "./StatisticCard";

const ProgressModule = ({ list, completedListLength, toDoListLength }) => {
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

      <Row gutter={16}>
        <StatisticCard
          title="Task To Do"
          value={toDoListLength}
          color="#cf1322"
          // prefix={<CloseOutlined />}
        />
        <StatisticCard
          title="Task Completed"
          value={completedListLength}
          color="#3f8600"
          prefix={<CheckOutlined />}
        />
        {/* <Col span={12}>
          <Card bordered={false}>
            <Statistic
              title="Task To Do"
              value={9.3}
              precision={2}
              valueStyle={{
                color: "#cf1322",
              }}
              prefix={<ArrowDownOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card bordered={false}>
            <Statistic
              title="Task Completed"
              value={11.28}
              precision={2}
              valueStyle={{
                color: "#3f8600",
              }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
          </Card>
        </Col> */}
      </Row>
    </div>
  );
};

export default ProgressModule;
