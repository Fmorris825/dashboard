import { useState } from "react";
import { Form, Input, Modal } from "antd";
import { db } from "../../../config";
import { updateDoc, doc } from "firebase/firestore";

const EditTaskButton = ({ selectedTask, getTasks }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [task, setTask] = useState("");
  const [description, setDescriiption] = useState("");

  const showModal = () => {
    console.log(selectedTask);
    setIsModalOpen(true);
  };

  const updateTask = async (id) => {
    const taskDoc = doc(db, "Tasks", id);
    const newFields = { task: task, description: description };
    await updateDoc(taskDoc, newFields);
    getTasks();
  };

  function handleSubmit(id) {
    console.log(id);
    updateTask(id);
    console.log("Success");
    setDescriiption("");
    setTask("");
    setIsModalOpen(false);
  }

  function handleCancel() {
    setDescriiption("");
    setTask("");
    console.log("Cancel");
    setIsModalOpen(false);
  }

  return (
    <>
      <button
        type="primary"
        onClick={showModal}
        style={{ backgroundColor: "inherit" }}
      >
        edit
      </button>
      <Modal
        open={isModalOpen}
        onOk={() => handleSubmit(selectedTask.id)}
        onCancel={() => handleCancel()}
      >
        <h3>Edit "{selectedTask.task}" Task</h3>
        <Form
          name="basic"
          style={{
            maxWidth: 600,
          }}
          // onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Input
            placeholder="Task"
            onChange={(event) => {
              setTask(event.target.value);
            }}
            value={task}
          />
          <Input
            placeholder="Task Description"
            onChange={(event) => {
              setDescriiption(event.target.value);
            }}
            value={description}
          />
        </Form>
      </Modal>
    </>
  );
};

export default EditTaskButton;
