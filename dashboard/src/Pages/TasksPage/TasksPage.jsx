import "./TasksPage.css";
import { useEffect, createContext } from "react";
import TasksList from "./TaskPageComponents/TasksList";
import AddTaskModal from "./TaskPageComponents/AddTaskModal";
import CompletedTaskList from "./TaskPageComponents/CompletedTaskList";

export const TaskContext = createContext();

const TasksPage = ({
  tasks,
  getTasks,
  completedList,
  toDoList,
  tasksCollectionRef,
  filteredToDo,
}) => {
  useEffect(() => {
    getTasks();
  }, []);
  return (
    <div>
      <AddTaskModal
        tasksCollectionRef={tasksCollectionRef}
        getTasks={getTasks}
        filteredToDo={filteredToDo}
      />
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
