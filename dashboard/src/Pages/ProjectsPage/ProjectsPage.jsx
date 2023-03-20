import { useEffect, useState, lazy, Suspense } from "react";
import ProjectDropdownMenu from "../TasksPage/TaskPageComponents/ProjectDropdownMenu";
import TasksList from "../TasksPage/TaskPageComponents/TasksList";
import { Row } from "antd";

import AddTaskModal from "../TasksPage/TaskPageComponents/AddTaskModal";
import FileUpload from "./ProjectsPageComponents/FileUpload";
import Header from "../../components/Header";
import "./ProjectPage.css";
import Slide from "./ProjectsPageComponents/Slide";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";
import CompleteTaskButton from "../TasksPage/TaskPageComponents/CompleteTaskButton";

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
import UndoTask from "../TasksPage/TaskPageComponents/UndoTask";
import ProgressModule from "../DashBoardPage/ProgressComponents/ProgressModule";
import SubHeader from "../../components/SubHeader";

const ProjectsPage = ({
  projects,
  setTasks,
  tasks,
  tasksCollectionRef,
  setProjects,
  projectsCollectionRef,
  filterCompleted,
  filteredToDo,
}) => {
  const [selectedProject, setSelectedProject] = useState(false);
  const [projectTaskList, setProjectTaskList] = useState([]);
  const [completedList, setCompletedList] = useState({});
  const [toDoList, setDoList] = useState({});
  const completedPercentage =
    (completedList.length / projectTaskList.length) * 100;
  const roundCompleted = completedPercentage.toFixed(0);
  const completedListLength = completedList.length;
  const toDoListLength = toDoList.length;
  const tasksLength = projectTaskList.length;

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

  const handleSelect = (event) => {
    console.log(event);
    setSelectedProject(event);
  };

  console.log(selectedProject);
  return selectedProject ? (
    <div>
      <ProjectDropdownMenu items={items} onClick={onClick} />

      <Header headerText={`${selectedProject.name} Project`} />
      <Row className="projectsRow">
        <img
          className="projectThumbnail Container"
          src={selectedProject.thumbnail_Url}
        />
        <ProgressModule
          list={roundCompleted}
          completedListLength={completedListLength}
          toDoListLength={toDoListLength}
          tasksLength={tasksLength}
        />
      </Row>

      <div className="Container">
        {" "}
        <SubHeader text="Task Workspace" />
        <AddTaskModal
          tasksCollectionRef={tasksCollectionRef}
          setTasks={setTasks}
          selectedProject={selectedProject}
        />{" "}
        <div className="taskListContainer">
          {" "}
          <ErrorBoundary FallbackComponent={OurFallbackComponent}>
            <div className="list">
              {" "}
              <SubHeader text="Tasks to be done" />
              <TasksList
                setTasks={setTasks}
                list={toDoList}
                isLoading={isLoading}
                multiComponent={CompleteTaskButton}
                filterCompleted={filterCompleted}
                filteredToDo={filteredToDo}
              />
            </div>
          </ErrorBoundary>
          <ErrorBoundary FallbackComponent={OurFallbackComponent}>
            <div className="list">
              <SubHeader text="Completed Task" />
              <TasksList
                setTasks={setTasks}
                list={completedList}
                isLoading={isLoading}
                multiComponent={UndoTask}
                filterCompleted={filterCompleted}
                filteredToDo={filteredToDo}
              />
            </div>
          </ErrorBoundary>
        </div>
      </div>
    </div>
  ) : (
    <div>
      {" "}
      {/* <ProjectDropdownMenu items={items} onClick={onClick} /> */}
      <div className="Container">
        <Swiper
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
                <img
                  className="slideImg"
                  src={project.thumbnail_Url}
                  value={project}
                  onClick={(event) => handleSelect(project)}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* <FileUpload /></div> */}
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
