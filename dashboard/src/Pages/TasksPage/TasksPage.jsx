import { useState, useEffect } from "react";
import "./TasksList.css";

import { db } from "../../config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import TasksList from "./TasksList/TasksList";
import AddTaskModal from "./AddTaskModal/AddTaskModal";

const TasksPage = () => {
  const [tasks, setTasks] = useState([]);
  const tasksCollectionRef = collection(db, "Tasks");

  useEffect(() => {
    const getTasks = async () => {
      const data = await getDocs(tasksCollectionRef);
      setTasks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getTasks();
  }, [tasksCollectionRef]);

  return (
    <div>
      <TasksList tasks={tasks} />
      {/* {tasks.map((task) => {
        return (
          <div>
            {task.task} & {task.date}
          </div>
        );
      })} */}
      <AddTaskModal tasksCollectionRef={tasksCollectionRef} />
    </div>
  );
};

export default TasksPage;
