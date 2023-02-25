import { Avatar, List, Skeleton } from "antd";
import { useEffect, useState, createContext } from "react";
import portrait from "../../../portrait.jpg";
import DeleteTaskButton from "./DeleteTaskButton";
import EditTaskButton from "./EditTaskButton";
import UndoTask from "./UndoTask";
import LoadingTile from "../../DashBoardPage/DashBoardPageComponents/LoadingTile";

const CompletedTaskList = ({ getTasks, completedList, isLoading }) => {
  // const sorted = completedList.sort(function (a, b) {
  //   return b.timestamp.valueOf() - a.timestamp.valueOf();
  // });

  return isLoading ? (
    <LoadingTile />
  ) : (
    <List
      className="taskList"
      itemLayout="horizontal"
      dataSource={completedList}
      renderItem={(task) => (
        <List.Item
          actions={[
            <EditTaskButton selectedTask={task} getTasks={getTasks} />,
            <DeleteTaskButton task={task} getTasks={getTasks} />,
            <UndoTask selectedTask={task} getTasks={getTasks} />,
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
