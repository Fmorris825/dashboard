import { useState, useEffect } from "react";
import "./TasksPage.css";

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

const TasksPage = () => {
  const [tasks, setTasks] = useState([]);
  const tasksCollectionRef = collection(db, "Tasks");

  const getTasks = async () => {
    const data = await getDocs(tasksCollectionRef);
    setTasks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log("Hit");
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div>
      <AddTaskModal
        tasksCollectionRef={tasksCollectionRef}
        getTasks={getTasks}
      />
      <TasksList tasks={tasks} getTasks={getTasks} />
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
