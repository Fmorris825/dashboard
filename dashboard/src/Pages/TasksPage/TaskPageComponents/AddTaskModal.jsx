import { Button, Modal } from "antd";
import { useState, useEffect } from "react";
import { Form, Input } from "antd";
import { addDoc, getDocs } from "firebase/firestore";

const AddTaskModal = ({ tasksCollectionRef, getTasks }) => {
  const [modal, setModal] = useState(false);
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [timestamp, setTimestamp] = useState(0);
  const [description, setDescriiption] = useState("");

  const createTask = async () => {
    await addDoc(tasksCollectionRef, {
      task: task,
      description: description,
      timestamp: Date.now(),
      date: date,
    });
    getTasks();
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
    setModal(false);
  }
  function handleCancel() {
    setDescriiption("");
    setTask("");
    console.log("Cancel");
    setModal(false);
  }

  console.log(date);
  return (
    <>
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
          tasksCollectionRef={tasksCollectionRef}
          handleSubmit={handleSubmit}
          setTask={setTask}
          setDate={setDate}
          setDescriiption={setDescriiption}
          setTimestamp={setTimestamp}
          date={date}
          task={task}
          description={description}
          timestamp={timestamp}
        />
      </Modal>
    </>
  );
};

function AddTaskForm({ setDescriiption, setTask, task, description }) {
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
    </Form>
  );
}
export default AddTaskModal;
