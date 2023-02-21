import "./TasksPage.css";
import { useEffect, createContext, useState } from "react";
import TasksList from "./TaskPageComponents/TasksList";
import AddTaskModal from "./TaskPageComponents/AddTaskModal";
import CompletedTaskList from "./TaskPageComponents/CompletedTaskList";
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
}) => {
  const [projectTaskList, setProjectTaskList] = useState([]);

  useEffect(() => {
    filterTasks();
  }, []);

  function filterTasks() {
    const projectTasks = tasks.filter((task) => {
      if (task.project_Id === "CROBPaUMvvHMhs9d4mXm") {
        return task;
      }
    });
    return setProjectTaskList(projectTasks);
  }
  console.log(projectTaskList);
  return (
    <div>
      <div>
        <ProjectDropdownMenu projects={projects} />
      </div>
      <div>
        <AddTaskModal
          tasksCollectionRef={tasksCollectionRef}
          getTasks={getTasks}
          filteredToDo={filteredToDo}
        />
      </div>
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
