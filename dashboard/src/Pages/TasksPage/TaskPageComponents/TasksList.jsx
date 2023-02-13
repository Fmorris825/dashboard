import { Avatar, List, Skeleton } from "antd";
import { useEffect, useState } from "react";
import portrait from "../../../portrait.jpg";
import DeleteTaskButton from "./DeleteTaskButton";
import EditTaskButton from "./EditTaskButton";

const TasksList = ({ tasks, getTasks, toDoList }) => {
  const sorted = toDoList.sort(function (a, b) {
    return b.timestamp.valueOf() - a.timestamp.valueOf();
  });

  // const [toDoList, setDoList] = useState({});

  // function filteredToDo() {
  //   const toDoTasks = tasks.filter((task) => {
  //     return task.complete === false;
  //   });
  //   return setDoList(toDoTasks);
  // }

  return (
    <List
      className="taskList"
      itemLayout="horizontal"
      dataSource={toDoList}
      renderItem={(task) => (
        <List.Item
          actions={[
            <EditTaskButton selectedTask={task} getTasks={getTasks} />,
            <DeleteTaskButton task={task} getTasks={getTasks} />,
          ]}
        >
          <Skeleton avatar title={false} loading={task.loading}>
            <List.Item.Meta
              avatar={<Avatar src={portrait} />}
              title={<h5>{task.task}</h5>}
              description={task.description}
            />
            <div className="date">{task.date}</div>
          </Skeleton>
        </List.Item>
      )}
    />
  );
};

export default TasksList;
