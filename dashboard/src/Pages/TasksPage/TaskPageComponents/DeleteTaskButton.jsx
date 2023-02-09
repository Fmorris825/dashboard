import { db } from "../../../config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

const DeleteTaskButton = ({ task, getTasks }) => {
  const deleteTask = async (id) => {
    const userDoc = doc(db, "Tasks", id);
    await deleteDoc(userDoc);
    getTasks();
  };
  console.log(task);
  return (
    <button
      key="list-loadmore-edit"
      onClick={() => {
        deleteTask(task.id);
      }}
    >
      delete
    </button>
  );
};

export default DeleteTaskButton;
