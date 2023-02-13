import { UndoOutlined } from "@ant-design/icons";
import { db } from "../../../config";
import { updateDoc, doc } from "firebase/firestore";

const UndoTask = ({ selectedTask, getTasks }) => {
  const Undo = async (id) => {
    const taskDoc = doc(db, "Tasks", id);
    const newFields = { complete: false };
    await updateDoc(taskDoc, newFields);
    getTasks();
  };
  return (
    <button
      key="list-loadmore-edit"
      onClick={() => {
        Undo(selectedTask.id);
      }}
    >
      <UndoOutlined style={{ color: "#0000FF", fontSize: "16px" }} />
    </button>
  );
};

export default UndoTask;
