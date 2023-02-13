import { Avatar, List, Skeleton } from "antd";
import { useEffect, useState, createContext } from "react";
import portrait from "../../../portrait.jpg";
import DeleteTaskButton from "./DeleteTaskButton";
import EditTaskButton from "./EditTaskButton";

const CompletedTaskList = ({ tasks, getTasks, completedList }) => {
  //   const [completedList, setCompletedList] = useState({});

  //   function filterCompleted() {
  //     const completedTasks = tasks.filter((task) => {
  //       return task.complete === true;
  //     });
  //     return setCompletedList(completedTasks);
  //   }

  //   useEffect(() => {
  //     filterCompleted();
  //   }, [tasks]);

  return (
    <List
      className="taskList"
      itemLayout="horizontal"
      dataSource={completedList}
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

export default CompletedTaskList;
