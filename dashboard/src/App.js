// import { db } from "./config";
// import {
//   collection,
//   getDocs,
//   addDoc,
//   updateDoc,
//   doc,
//   deleteDoc,
// } from "firebase/firestore";

import "antd/dist/reset.css";
import "./App.css";
import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import {
  MailOutlined,
  UserOutlined,
  DatabaseOutlined,
  CalendarOutlined,
  FolderOpenOutlined,
  RobotOutlined,
  FireOutlined,
} from "@ant-design/icons";

import { Breadcrumb, Layout, Menu, theme } from "antd";
import TasksPage from "./Pages/TasksPage/TasksPage";
import PlanningPage from "./Pages/PlanningPage/PlanningPage";
const { Header, Content, Sider } = Layout;

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
//NavBar List
const items1 = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const navItems = [
  getItem("Dashboard", "sub1", <MailOutlined />, [
    getItem("Tasks", "/tasks", <RobotOutlined />),
    getItem("Planning", "/planning", <CalendarOutlined />),
    getItem("Projects", "/projects", <FireOutlined />),
    getItem("Backlog", "/backlog", <FolderOpenOutlined />),
  ]),
  getItem("Fred's Links", "/links", <UserOutlined />),
  getItem("Resources", "/resources", <DatabaseOutlined />),
];

//Original Nav Lists
// const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
//   (icon, index) => {
//     const key = String(index + 1);
//     return {
//       key: `sub${key}`,
//       icon: React.createElement(icon),
//       label: `subnav ${key}`,
//       children: new Array(4).fill(null).map((_, j) => {
//         const subKey = index * 4 + j + 1;
//         return {
//           key: subKey,
//           label: `option${subKey}`,
//         };
//       }),
//     };
//   }
// );

console.log(navItems);
function App() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <Layout>
      <Header className="header">
        <h1 className="brand">HOMEBASE</h1>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={items1}
        />
      </Header>
      <Layout>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
        >
          <Menu
            onClick={({ key }) => {
              navigate(key);
            }}
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{
              height: "100%",
              borderRight: 0,
              // color: "royalblue",
            }}
            items={navItems}
          />
        </Sider>
        <Layout
          style={{
            padding: "0 24px 24px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Contents />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );

  function Contents() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<div>Dashboard</div>}></Route>
          <Route path="/projects" element={<div>Projects</div>}></Route>
          <Route path="/tasks" element={<TasksPage />}></Route>
          <Route path="/planning" element={<PlanningPage />}></Route>
          <Route path="/backlog" element={<div>Backlog</div>}></Route>
          <Route path="/resources" element={<div>Resources</div>}></Route>
          <Route path="/links" element={<div>Fred's Links</div>}></Route>
        </Routes>
      </div>
    );
  }
}

export default App;
