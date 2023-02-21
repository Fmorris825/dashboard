import { DownOutlined } from "@ant-design/icons";
import { Dropdown, message, Space } from "antd";

const ProjectDropdownMenu = ({ projects }) => {
  const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
  };

  const items = projects.map((project, index) => {
    return { label: project.name, key: project.id };
  });

  //   const items = [
  //     {
  //       label: "1st menu item",
  //       key: "1",
  //     },
  //     {
  //       label: "2nd menu item",
  //       key: "2",
  //     },
  //     {
  //       label: "3rd menu item",
  //       key: "3",
  //     },
  //   ];

  console.log(items);
  return (
    <Dropdown
      menu={{
        items,
        onClick,
      }}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          Hover me, Click menu item
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};

export default ProjectDropdownMenu;
