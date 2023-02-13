import "antd/dist/reset.css";
import "./App.css";
import React from "react";
import { useState, useEffect, createContext } from "react";
import { db } from "./config";
import { Routes, Route, useNavigate } from "react-router-dom";
import {
  collection,
  getDocs,
  //   addDoc,
  //   updateDoc,
  //   doc,
  //   deleteDoc,
} from "firebase/firestore";

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
import ProjectsPage from "./Pages/ProjectsPage/ProjectsPage";
import DashBoardPage from "./Pages/DashBoardPage/DashBoardPage";
const { Header, Content, Sider } = Layout;

// export const TaskContext = createContext();

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
  getItem("HomeBase", "sub1", <MailOutlined />, [
    getItem("Dashboard", "/dashboard", <RobotOutlined />),
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

function App() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);
  const tasksCollectionRef = collection(db, "Tasks");
  const [completedList, setCompletedList] = useState({});
  const [toDoList, setDoList] = useState({});

  const getTasks = async () => {
    const data = await getDocs(tasksCollectionRef);
    setTasks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log("Hit");
  };

  function filterCompleted() {
    const completedTasks = tasks.filter((task) => {
      return task.complete === true;
    });
    return setCompletedList(completedTasks);
  }
  useEffect(() => {
    getTasks();
  }, []);

  useEffect(() => {
    filterCompleted();
    filteredToDo();
  }, [tasks]);

  function filteredToDo() {
    const toDoTasks = tasks.filter((task) => {
      return task.complete === false;
    });
    return setDoList(toDoTasks);
  }

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
            <div>
              <Routes>
                <Route path="/" element={<div>Dashboard</div>}></Route>
                <Route
                  path="/dashboard"
                  element={
                    <DashBoardPage
                      tasks={tasks}
                      toDoList={toDoList}
                      completedList={completedList}
                    />
                  }
                ></Route>
                <Route path="/projects" element={<ProjectsPage />}></Route>
                <Route
                  path="/tasks"
                  element={
                    <TasksPage
                      tasks={tasks}
                      tasksCollectionRef={tasksCollectionRef}
                      getTasks={getTasks}
                      completedList={completedList}
                      toDoList={toDoList}
                    />
                  }
                ></Route>
                <Route path="/planning" element={<PlanningPage />}></Route>
                <Route path="/backlog" element={<div>Backlog</div>}></Route>
                <Route path="/resources" element={<div>Resources</div>}></Route>
                <Route path="/links" element={<div>Fred's Links</div>}></Route>
              </Routes>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );

  // function Contents() {

  //   const [tasks, setTasks] = useState([]);
  //   const tasksCollectionRef = collection(db, "Tasks");

  //   const TasksPage = () => {
  //     const [tasks, setTasks] = useState([]);
  //     const tasksCollectionRef = collection(db, "Tasks");

  //     const getTasks = async () => {
  //       const data = await getDocs(tasksCollectionRef);
  //       setTasks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //       console.log("Hit");
  //     };

  //     useEffect(() => {
  //       getTasks();
  //     }, []);

  //   return (
  //     <div>
  //       <Routes>
  //         <Route path="/" element={<div>Dashboard</div>}></Route>
  //         <Route path="/dashboard" element={<DashBoardPage tasks={tasks} />}></Route>
  //         <Route path="/projects" element={<ProjectsPage />}></Route>
  //         <Route
  //           path="/tasks"
  //           element={
  //             <TasksPage
  //               tasks={tasks}
  //               tasksCollectionRef={tasksCollectionRef}
  //               getTasks={getTasks}
  //             />
  //           }
  //         ></Route>
  //         <Route path="/planning" element={<PlanningPage />}></Route>
  //         <Route path="/backlog" element={<div>Backlog</div>}></Route>
  //         <Route path="/resources" element={<div>Resources</div>}></Route>
  //         <Route path="/links" element={<div>Fred's Links</div>}></Route>
  //       </Routes>
  //     </div>
  //   );
}

export default App;
