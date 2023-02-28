import { db } from "../../../config";
import { message } from "antd";
import { doc, deleteDoc } from "firebase/firestore";

import { CloseCircleTwoTone } from "@ant-design/icons";

const DeleteTaskButton = ({ task, getTasks }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const deletion = () => {
    messageApi.open({
      type: "error",
      content: "Task Deleted",
    });
  };

  const deleteTask = async (id) => {
    const userDoc = doc(db, "Tasks", id);
    await deleteDoc(userDoc);
    getTasks();
    deletion();
  };

  return (
    <>
      {contextHolder}
      <button
        key="list-loadmore-edit"
        style={{ backgroundColor: "inherit" }}
        onClick={() => {
          deleteTask(task.id);
        }}
      >
        <CloseCircleTwoTone
          style={{
            color: "#FF8A8A",
            fontSize: "15px",
            filter: "drop-shadow(0 0 0.1rem black)",
          }}
          twoToneColor="#FF0000"
        />
      </button>{" "}
    </>
  );
};

export default DeleteTaskButton;
