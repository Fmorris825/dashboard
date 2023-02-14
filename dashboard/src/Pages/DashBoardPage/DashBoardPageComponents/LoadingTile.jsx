import { Alert, Space, Spin } from "antd";

const LoadingTile = ({}) => {
  return (
    <Space
      direction="vertical"
      style={{
        width: " 40%",
      }}
    >
      <Spin tip="Loading...">
        <Alert
          message="Weather Module"
          description="Loading Weather for local area."
          type="info"
        />
      </Spin>
    </Space>
  );
};

export default LoadingTile;
