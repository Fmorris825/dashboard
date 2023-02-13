import "./TasksPage.css";
import { useState, useEffect, createContext } from "react";
import { db } from "../../config";
import {
  collection,
  getDocs,
  //   addDoc,
  //   updateDoc,
  //   doc,
  //   deleteDoc,
} from "firebase/firestore";
import TasksList from "./TaskPageComponents/TasksList";
import AddTaskModal from "./TaskPageComponents/AddTaskModal";
import DashBoardPage from "../DashBoardPage/DashBoardPage";
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
    <div className="taskListContainer">
      <div className="list">
        <AddTaskModal
          tasksCollectionRef={tasksCollectionRef}
          getTasks={getTasks}
          filteredToDo={filteredToDo}
        />

        <TasksList tasks={tasks} getTasks={getTasks} toDoList={toDoList} />
      </div>
      <div className="list">
        <CompletedTaskList
          tasks={tasks}
          getTasks={getTasks}
          completedList={completedList}
        />
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
