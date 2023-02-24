import { useEffect, useState, useRef } from "react";
import ProjectDropdownMenu from "../TasksPage/TaskPageComponents/ProjectDropdownMenu";
import TasksList from "../TasksPage/TaskPageComponents/TasksList";
import CompletedTaskList from "../TasksPage/TaskPageComponents/CompletedTaskList";
import AddTaskModal from "../TasksPage/TaskPageComponents/AddTaskModal";
import FileUpload from "./ProjectsPageComponents/FileUpload";
import Header from "../../components/Header";
import "./ProjectPage.css";
import Slide from "./ProjectsPageComponents/Slide";

import { getDocs } from "firebase/firestore";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import LoadingTile from "../DashBoardPage/DashBoardPageComponents/LoadingTile";

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

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getProjects = async () => {
      try {
        const data = await getDocs(projectsCollectionRef);

        setProjects(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        filterTasks();
        setIsLoading(false);
        console.log("lol");
      } catch (err) {
        console.log(err);
      }
    };
    getProjects();
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

  return isLoading ? (
    <LoadingTile />
  ) : (
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
      {/* <FileUpload /> */}{" "}
      <Header headerText={`Progress for ${selectedProject.name} Project`} />
      <img className="projectThumbnail" src={selectedProject.thumbnail_Url} />
      <div className="taskListContainer">
        <div className="list">
          <TasksList tasks={tasks} getTasks={getTasks} toDoList={toDoList} />
        </div>
        <div className="list">
          <CompletedTaskList
            tasks={tasks}
            getTasks={getTasks}
            completedList={completedList}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
