import { CheckCircleTwoTone } from "@ant-design/icons";
import { db } from "../../../config";
import { updateDoc, doc } from "firebase/firestore";

const CompleteTaskButton = ({ selectedTask, getTasks }) => {
  const CompleteTask = async (id) => {
    const taskDoc = doc(db, "Tasks", id);
    const newFields = { complete: true };
    await updateDoc(taskDoc, newFields);
    getTasks();
  };
  return (
    <button
      key="list-loadmore-edit"
      onClick={() => {
        CompleteTask(selectedTask.id);
      }}
    >
      <CheckCircleTwoTone
        style={{ color: "#FF8A8A", fontSize: "16px" }}
        twoToneColor="#00FF00"
      />
    </button>
  );
};

export default CompleteTaskButton;
