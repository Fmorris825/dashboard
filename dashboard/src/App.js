// General Imports
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import keys from "./keys";

// CSS Imports //
import "antd/dist/reset.css";
import "./App.css";

// Firebase Imports //
import { db } from "./config";
import {
  collection,
  getDocs,
  //   addDoc,
  //   updateDoc,
  //   doc,
  //   deleteDoc,
} from "firebase/firestore";

// Icon Imports //
import {
  MailOutlined,
  UserOutlined,
  DatabaseOutlined,
  CalendarOutlined,
  FolderOpenOutlined,
  RobotOutlined,
  FireOutlined,
  DesktopOutlined,
} from "@ant-design/icons";

// antd Imports //
import { Layout, Menu, theme, Switch, ConfigProvider } from "antd";

// Component Imports //
import TasksPage from "./Pages/TasksPage/TasksPage";
import PlanningPage from "./Pages/PlanningPage/PlanningPage";
import DashBoardPage from "./Pages/DashBoardPage/DashBoardPage";
import LoadingTile from "./Pages/DashBoardPage/DashBoardPageComponents/LoadingTile";
import ProjectsPage from "./Pages/ProjectsPage/ProjectsPage";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";
import ContactPage from "./Pages/ContactPage/ContactPage";
import ResourcePage from "./Pages/ResourcesPage/ResourcePage";

// antd Component Layout //
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
  getItem("HomeBase", "sub1", <MailOutlined />, [
    getItem("Dashboard", "/dashboard", <DesktopOutlined />),
    getItem("Tasks", "/tasks", <RobotOutlined />),
    getItem("Planning", "/planning", <CalendarOutlined />),
    getItem("Projects", "/projects", <FireOutlined />),
    getItem("Backlog", "/backlog", <FolderOpenOutlined />),
  ]),
  getItem("Contact Fred", "/links", <UserOutlined />),
  getItem("Resources", "/resources", <DatabaseOutlined />),
];

function App() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const [tasks, setTasks] = useState([]);
  const tasksCollectionRef = collection(db, "Tasks");

  const [projects, setProjects] = useState([]);
  const projectsCollectionRef = collection(db, "Projects");

  const [completedList, setCompletedList] = useState({});
  const [toDoList, setDoList] = useState({});
  const [yahooWeather, setYahooWeather] = useState(false);
  const [ToggleDisplayMode, setToggleDisplayMode] = useState(false);
  const [darkMode, setDarkMode] = useState("inactive");
  const [appDisplay, setAppDisplay] = useState("inactive");
  const [date, setDate] = useState("");
  const [news, setNews] = useState({});

  useEffect(() => {
    setIsLoading(true);
    const getTasks = async () => {
      try {
        const data = await getDocs(tasksCollectionRef);

        setTasks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        filterCompleted();
        filteredToDo();
        setIsLoading(false);
        console.log("lol");
      } catch (err) {
        console.log(err);
      }
    };
    getTasks();
    getProjects();
    getWeather();
    getNewDate();
    getNews();
    console.log("hit");
  }, []);

  useEffect(() => {
    filterCompleted();
    filteredToDo();
  }, [tasks]);

  // Weather API Request //
  async function getWeather() {
    try {
      const response = await axios.get(
        "https://yahoo-weather5.p.rapidapi.com/weather",
        {
          params: { location: "Irving", format: "json", u: "f" },
          headers: {
            "X-RapidAPI-Key":
              "e79d90cae2msh5521f68907c95b5p178094jsncb7add5f2fc5",
            "X-RapidAPI-Host": "yahoo-weather5.p.rapidapi.com",
          },
        }
      );
      setYahooWeather(response.data);
      setIsLoading(true);
      if (response.status === 200) {
        console.log(response);
      }
    } catch (error) {
      console.log(error.response.data);
    }
  }
  // Get Current Date Function //
  function getNewDate() {
    let today = new Date(),
      date =
        today.getDate() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getFullYear();
    setDate(date);
  }

  // News API Request //
  async function getNews() {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${keys.newsApiKey}`
      );
      setNews(response.data);
      if (response.status === 200) {
        console.log(response);
      }
    } catch (error) {
      console.log(error.response.data);
    }
  }

  // Get All Task Request //
  const getTasks = async () => {
    const data = await getDocs(tasksCollectionRef);
    setTasks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    filterCompleted();
    filteredToDo();
  };

  // Get All Projects Request //
  const getProjects = async () => {
    const data = await getDocs(projectsCollectionRef);
    setProjects(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  // Filter Tasks List for Completed Tasks //
  function filterCompleted() {
    const completedTasks = tasks.filter((task) => {
      return task.complete === true;
    });
    return setCompletedList(completedTasks);
  }

  // Filter Tasks List for ToDo Tasks //
  function filteredToDo() {
    const toDoTasks = tasks.filter((task) => {
      return task.complete === false;
    });
    return setDoList(toDoTasks);
  }

  // Toggle Dark Mode //
  const onChange = (checked) => {
    setToggleDisplayMode(!ToggleDisplayMode);
    if (ToggleDisplayMode === false) {
      setDarkMode("rgba(128, 128, 128, 0.39)");
      setAppDisplay("active");
    } else if (ToggleDisplayMode === true) {
      setDarkMode("rgb(255, 255, 255)");
      setAppDisplay("inactive");
    }
  };
  return (
    <div className={appDisplay}>
      <ConfigProvider
      // theme={{
      //   token: {
      //     colorPrimary: `#00b96b`,
      //     colorBgLayout: `rgba(128, 128, 128, 0.39)`,
      //     colorBgBase: `rgba(128, 128, 128, 0.39)`,
      //     colorBgContainer: `rgba(128, 128, 128, 0.39)`,
      //   },
      // }}
      >
        <Layout>
          <Header className="header">
            <h1 className="brand">HOMEBASE</h1>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              items={items1}
            />
            <Switch defaultChecked onChange={onChange} />
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
                  backgroundColor: darkMode,
                }}
                items={navItems}
              />
            </Sider>
            <Layout
              style={{
                padding: "24px 24px 24px",
              }}
            >
              {/* <Breadcrumb
                style={{
                  margin: "16px 0",
                }}
              >
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb> */}
              <Content
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                  backgroundColor: darkMode,
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
                          yahooWeather={yahooWeather}
                          news={news.articles}
                          isLoading={isLoading}
                        />
                      }
                    ></Route>
                    <Route
                      path="/projects"
                      element={
                        <ErrorBoundary FallbackComponent={OurFallbackComponent}>
                          <ProjectsPage
                            projects={projects}
                            setProjects={setProjects}
                            tasks={tasks}
                            getTasks={getTasks}
                            tasksCollectionRef={tasksCollectionRef}
                            isLoading={isLoading}
                            setIsLoading={setIsLoading}
                            projectsCollectionRef={projectsCollectionRef}
                          />
                        </ErrorBoundary>
                      }
                    ></Route>
                    <Route
                      path="/tasks"
                      element={
                        <TasksPage
                          tasks={tasks}
                          tasksCollectionRef={tasksCollectionRef}
                          getTasks={getTasks}
                          completedList={completedList}
                          toDoList={toDoList}
                          filteredToDo={filteredToDo}
                          projects={projects}
                          isLoading={isLoading}
                        />
                      }
                    ></Route>
                    <Route path="/planning" element={<PlanningPage />}></Route>
                    <Route path="/backlog" element={<div>Backlog</div>}></Route>
                    <Route path="/resources" element={<ResourcePage />}></Route>
                    <Route path="/links" element={<ContactPage />}></Route>
                  </Routes>
                </div>
              </Content>
            </Layout>
          </Layout>
        </Layout>{" "}
      </ConfigProvider>
    </div>
  );
}
const OurFallbackComponent = ({
  error,
  componentStack,
  resetErrorBoundary,
}) => {
  return (
    <div>
      <h1>An error occurred: {error.message}</h1>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

export default App;
