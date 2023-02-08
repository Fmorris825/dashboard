import { Button, Modal } from "antd";
import { useState } from "react";
import { Checkbox, Form, Input } from "antd";
import { addDoc } from "firebase/firestore";

const AddTaskModal = ({ tasksCollectionRef }) => {
  const [modal, setModal] = useState(false);

  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescriiption] = useState("");

  const createProperty = async () => {
    await addDoc(tasksCollectionRef, {
      task: task,
      description: description,
      date: date,
    });
  };

  function handleSubmit() {
    createProperty();
    console.log("Success");
    setDate("");
    setDescriiption("");
    setTask("");
    setModal(false);
  }
  function handleCancel() {
    setDate("");
    setDescriiption("");
    setTask("");
    console.log("Cancel");
    setModal(false);
  }

  return (
    <>
      <Button onClick={() => setModal(true)}>Add New Task</Button>
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
          date={date}
          task={task}
          description={description}
        />
      </Modal>
    </>
  );
};

function AddTaskForm({
  setDate,
  setDescriiption,
  setTask,

  date,
  task,
  description,
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
      <Input
        placeholder="Date"
        onChange={(event) => {
          setDate(event.target.value);
        }}
        value={date}
      />
    </Form>
  );
}
export default AddTaskModal;
