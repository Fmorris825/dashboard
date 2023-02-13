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
    <div>
      <AddTaskModal
        tasksCollectionRef={tasksCollectionRef}
        getTasks={getTasks}
      />
      <TaskContext.Provider value={tasks}>
        <TasksList tasks={tasks} getTasks={getTasks} />
        {/* <DashBoardPage tasks={tasks} /> */}
      </TaskContext.Provider>

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
