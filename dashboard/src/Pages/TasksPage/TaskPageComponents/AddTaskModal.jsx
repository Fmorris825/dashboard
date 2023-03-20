import { Button, Modal } from "antd";
import { useState, useEffect } from "react";
import { Form, Input } from "antd";
import { addDoc, getDocs } from "firebase/firestore";
import { message } from "antd";
import ImportanceSelectDropdown from "./ImportanceSelectDropdown";
import GoogleCloudService from "../../../GoogleCloudService";

const AddTaskModal = ({
  GoogleService,
  collectionRef,
  setterFunction,
  filteredToDo,
  selectedProject,
}) => {
  const [modal, setModal] = useState(false);
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [timestamp, setTimestamp] = useState(0);
  const [description, setDescriiption] = useState("");
  const [importanceLevel, setImportanceLevel] = useState(0);

  const createTask = async () => {
    await addDoc(collectionRef, {
      task: task,
      description: description,
      timestamp: Date.now(),
      date: date,
      complete: false,
      project_Id: selectedProject,
      importance_level: importanceLevel,
    });
    GoogleService(collectionRef, setterFunction, null, filteredToDo);
    added();
  };

  useEffect(() => {
    getNewDate();
  }, []);

  function getNewDate() {
    let today = new Date(),
      date =
        today.getDate() +
        "/" +
        (today.getMonth() + 1) +
        "/" +
        today.getFullYear();
    setDate(date);
  }

  function handleSubmit() {
    createTask();
    console.log("Success");
    setDescriiption("");
    setTask("");
    setImportanceLevel(0);
    setModal(false);
  }
  function handleCancel() {
    setDescriiption("");
    setTask("");
    setImportanceLevel(0);
    console.log("Cancel");
    setModal(false);
  }

  const [messageApi, contextHolder] = message.useMessage();
  const added = () => {
    messageApi.open({
      type: "success",
      content: "Task Created",
    });
  };

  return (
    <>
      {contextHolder}
      <button onClick={() => setModal(true)}>Add New Task</button>
      <Modal
        title="New Task"
        style={{
          top: 200,
          left: 400,
        }}
        open={modal}
        onOk={() => handleSubmit()}
        onCancel={() => handleCancel()}
      >
        <AddTaskForm
          setTask={setTask}
          setDescriiption={setDescriiption}
          task={task}
          description={description}
          setImportanceLevel={setImportanceLevel}
        />
      </Modal>
    </>
  );
};

function AddTaskForm({
  setDescriiption,
  setTask,
  task,
  description,
  setImportanceLevel,
}) {
  return (
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
      <ImportanceSelectDropdown setImportanceLevel={setImportanceLevel} />
    </Form>
  );
}
export default AddTaskModal;
