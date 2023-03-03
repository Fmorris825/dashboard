import { Card, Col, Statistic } from "antd";

const StatisticCard = ({ title, value, color, prefix }) => {
  return (
    <Col span={12}>
      <Card bordered={false}>
        <Statistic
          title={title}
          value={value}
          //   precision={}
          valueStyle={{
            color: color,
          }}
          //   prefix=
          suffix={prefix}
        />
      </Card>
    </Col>
  );
};

export default StatisticCard;
