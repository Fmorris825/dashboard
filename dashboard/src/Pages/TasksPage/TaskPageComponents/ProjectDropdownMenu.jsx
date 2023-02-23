import { DownOutlined } from "@ant-design/icons";
import { Dropdown, message, Space } from "antd";
import { useState } from "react";

const ProjectDropdownMenu = ({ items, onClick }) => {
  return (
    <Dropdown
      menu={{
        items,
        onClick,
      }}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          Projects
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};

export default ProjectDropdownMenu;
