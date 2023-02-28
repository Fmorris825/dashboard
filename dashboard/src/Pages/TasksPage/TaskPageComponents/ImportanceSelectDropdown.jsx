import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Typography } from "antd";
import { FireFilled } from "@ant-design/icons";

const ImportanceSelectDropdown = ({ setImportanceLevel }) => {
  const items = [
    {
      key: 1,
      label: (
        <FireFilled
          style={{
            color: "red",
            fontSize: "16px",
            filter: "drop-shadow(0 0 0.1rem black)",
            marginLeft: "5px",
          }}
        />
      ),
    },
    {
      key: 2,
      label: (
        <FireFilled
          style={{
            color: "orange",
            fontSize: "16px",
            filter: "drop-shadow(0 0 0.1rem black)",
            marginLeft: "5px",
          }}
        />
      ),
    },
    {
      key: 3,
      label: (
        <FireFilled
          style={{
            color: "yellow",
            fontSize: "16px",
            filter: "drop-shadow(0 0 0.1rem black)",
            marginLeft: "5px",
          }}
        />
      ),
    },
  ];

  const onClick = ({ key }) => {
    setImportanceLevel(parseInt(key));
  };
  return (
    <Dropdown
      menu={{
        items,
        onClick,
      }}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          Importance Level
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};

export default ImportanceSelectDropdown;
