import { db } from "../../../config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

import { CloseCircleTwoTone } from "@ant-design/icons";

const DeleteTaskButton = ({ task, getTasks }) => {
  const deleteTask = async (id) => {
    const userDoc = doc(db, "Tasks", id);
    await deleteDoc(userDoc);
    getTasks();
  };
  return (
    <button
      key="list-loadmore-edit"
      onClick={() => {
        deleteTask(task.id);
      }}
    >
      <CloseCircleTwoTone
        style={{ color: "#FF8A8A", fontSize: "15px" }}
        twoToneColor="#FF0000"
      />
    </button>
  );
};

export default DeleteTaskButton;
