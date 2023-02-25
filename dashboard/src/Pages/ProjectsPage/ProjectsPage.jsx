import { useEffect, useState, lazy, Suspense } from "react";
import ProjectDropdownMenu from "../TasksPage/TaskPageComponents/ProjectDropdownMenu";
import TasksList from "../TasksPage/TaskPageComponents/TasksList";

import CompletedTaskList from "../TasksPage/TaskPageComponents/CompletedTaskList";
import AddTaskModal from "../TasksPage/TaskPageComponents/AddTaskModal";
import FileUpload from "./ProjectsPageComponents/FileUpload";
import Header from "../../components/Header";
import "./ProjectPage.css";
import Slide from "./ProjectsPageComponents/Slide";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";

import { getDocs } from "firebase/firestore";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import LoadingTile from "../DashBoardPage/DashBoardPageComponents/LoadingTile";
import { set } from "firebase/database";
import { async } from "@firebase/util";

const ProjectsPage = ({
  projects,
  getTasks,
  tasks,
  tasksCollectionRef,
  setProjects,
  projectsCollectionRef,
}) => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [projectTaskList, setProjectTaskList] = useState([]);
  const [completedList, setCompletedList] = useState({});
  const [toDoList, setDoList] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // setIsLoading(true);
    // const getProjects = async () => {
    //   try {
    //     const data = await getDocs(projectsCollectionRef);

    //     setProjects(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    //     setIsLoading(false);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    // getProjects().then(filterTasks());

    function filterTasks() {
      return new Promise((resolve, reject) => {
        const projectTasks = tasks.filter((task) => {
          if (task.project_Id === selectedProject.id) {
            return task;
          }
        });
        setProjectTaskList(projectTasks);
        sortTasks(projectTasks);
        resolve("yes");
      });
    }
    async function loadingSetter() {
      setIsLoading(true);
      const result = await filterTasks();
      setIsLoading(false);
      console.log("Promise Resolved: " + result);
    }
    loadingSetter();
  }, [tasks, selectedProject]);

  const onClick = ({ key }) => {
    const SelectedProject = projects.filter((project) => {
      if (project.id === key) {
        setSelectedProject(project);
      }
    });
    filterTasks();
  };

  function filterTasks() {
    const projectTasks = tasks.filter((task) => {
      if (task.project_Id === selectedProject.id) {
        return task;
      }
    });
    setProjectTaskList(projectTasks);
    sortTasks(projectTasks);
  }

  function sortTasks(tasklist) {
    const toDoTasks = tasklist.filter((task) => {
      return task.complete === false;
    });
    setDoList(toDoTasks);

    const completedTasks = tasklist.filter((task) => {
      return task.complete === true;
    });
    setCompletedList(completedTasks);
  }

  const items = projects.map((project, index) => {
    return { label: project.name, key: project.id };
  });

  console.log(
    selectedProject,
    projectTaskList,
    toDoList,
    completedList,
    isLoading
  );
  return (
    <div>
      <AddTaskModal
        tasksCollectionRef={tasksCollectionRef}
        getTasks={getTasks}
        selectedProject={selectedProject}
      />{" "}
      <ProjectDropdownMenu items={items} onClick={onClick} />
      {/* <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {projects.map((project) => {
          return (
            <SwiperSlide>
              <img className="slideImg" src={project.thumbnail_Url} />
            </SwiperSlide>
          );
        })}
      </Swiper> */}
      {/* <FileUpload /> */}
      <Header headerText={`Progress for ${selectedProject.name} Project`} />
      <img className="projectThumbnail" src={selectedProject.thumbnail_Url} />
      <div className="taskListContainer">
        <ErrorBoundary FallbackComponent={OurFallbackComponent}>
          <div className="list">
            <TasksList
              getTasks={getTasks}
              toDoList={toDoList}
              isLoading={isLoading}
            />
          </div>
        </ErrorBoundary>

        <div className="list">
          <CompletedTaskList
            getTasks={getTasks}
            completedList={completedList}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
};
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
export default ProjectsPage;
