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

const TasksPage = ({ tasks, getTasks, tasksCollectionRef }) => {
  //   const [tasks, setTasks] = useState([]);
  //   const tasksCollectionRef = collection(db, "Tasks");

  //   const getTasks = async () => {
  //     const data = await getDocs(tasksCollectionRef);
  //     setTasks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //     console.log("Hit");
  //   };

  //   useEffect(() => {
  //     getTasks();
  //   }, []);

  return (
    <div className="taskListContainer">
      <div className="list">
        {/* <AddTaskModal
          tasksCollectionRef={tasksCollectionRef}
          getTasks={getTasks}
        /> */}

        <TasksList tasks={tasks} getTasks={getTasks} />
      </div>
      <div className="list">
        <CompletedTaskList tasks={tasks} getTasks={getTasks} />
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
