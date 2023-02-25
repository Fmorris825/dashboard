import "./TasksPage.css";
import { useEffect, createContext, useState } from "react";
import TasksList from "./TaskPageComponents/TasksList";
import AddTaskModal from "./TaskPageComponents/AddTaskModal";
import CompletedTaskList from "./TaskPageComponents/CompletedTaskList";
import LoadingTile from "../DashBoardPage/DashBoardPageComponents/LoadingTile";
import ProjectDropdownMenu from "./TaskPageComponents/ProjectDropdownMenu";

export const TaskContext = createContext();

const TasksPage = ({
  tasks,
  getTasks,
  completedList,
  toDoList,
  tasksCollectionRef,
  filteredToDo,
  projects,
  isLoading,
}) => {
  const [selectedProject, setSelectedProject] = useState({});
  const onClick = ({ key }) => {
    const SelectedProject = projects.filter((project) => {
      if (project.id === key) {
        return project;
      }
      return setSelectedProject(project);
    });
  };

  const items = projects.map((project, index) => {
    return { label: project.name, key: project.id };
  });

  // const [projectTaskList, setProjectTaskList] = useState([]);

  // useEffect(() => {
  //   filterTasks();
  // }, []);

  // function filterTasks() {
  //   const projectTasks = tasks.filter((task) => {
  //     if (task.project_Id === "CROBPaUMvvHMhs9d4mXm") {
  //       return task;
  //     }
  //   });
  //   return setProjectTaskList(projectTasks);
  // }
  // console.log(projectTaskList);
  console.log(isLoading);
  return (
    <div>
      <div>{/* <ProjectDropdownMenu items={items} onClick={onClick} /> */}</div>
      <div>
        <AddTaskModal
          tasksCollectionRef={tasksCollectionRef}
          getTasks={getTasks}
          filteredToDo={filteredToDo}
        />
      </div>
      <div className="taskListContainer">
        <div className="list">
          <TasksList getTasks={getTasks} toDoList={toDoList} />
        </div>
        <div className="list">
          <CompletedTaskList
            getTasks={getTasks}
            completedList={completedList}
          />
        </div>
      </div>

      {/* {tasks.map((task) => {
        return (
          <div>
            {task.task} & {task.date}
          </div>
        );
      })} */}
    </div>
  );
};

export default TasksPage;
