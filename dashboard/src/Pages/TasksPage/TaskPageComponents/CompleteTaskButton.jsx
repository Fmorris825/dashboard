import { CheckCircleTwoTone } from "@ant-design/icons";
import { db } from "../../../config";
import { updateDoc, doc } from "firebase/firestore";
import { message } from "antd";
import GoogleCloudService from "../../../GoogleCloudService";

const CompleteTaskButton = ({
  selectedTask,
  setTasks,
  filterCompleted,
  filteredToDo,
}) => {
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Task Completed",
    });
  };

  const CompleteTask = async (id) => {
    const taskDoc = doc(db, "Tasks", id);
    const newFields = { complete: true };
    await updateDoc(taskDoc, newFields);
    GoogleCloudService.googleFirebaseGETRequestTasks(
      setTasks,
      filterCompleted,
      filteredToDo
    );
    success();
  };
  return (
    <>
      {contextHolder}
      <button
        key="list-loadmore-edit"
        style={{ backgroundColor: "inherit" }}
        onClick={() => {
          CompleteTask(selectedTask.id);
        }}
      >
        <CheckCircleTwoTone
          style={{
            color: "#FF8A8A",
            fontSize: "16px",
            filter: "drop-shadow(0 0 0.1rem black)",
          }}
          twoToneColor="#00FF00"
        />
      </button>{" "}
    </>
  );
};

export default CompleteTaskButton;
