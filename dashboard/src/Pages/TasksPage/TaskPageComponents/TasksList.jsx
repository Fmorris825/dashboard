import { Avatar, List, Skeleton } from "antd";
import portrait from "../../../portrait.jpg";
import DeleteTaskButton from "./DeleteTaskButton";
import EditTaskButton from "./EditTaskButton";
import CompleteTaskButton from "./CompleteTaskButton";
import LoadingTile from "../../DashBoardPage/DashBoardPageComponents/LoadingTile";
import TaskCard from "./TaskCard";

const TasksList = ({ list, getTasks, isLoading, multiComponent }) => {
  // const sorted = toDoList.sort(function (a, b) {
  //   return b.timestamp.valueOf() - a.timestamp.valueOf();
  // });

  return isLoading ? (
    <LoadingTile />
  ) : (
    <List
      className="taskList"
      itemLayout="horizontal"
      dataSource={list}
      renderItem={(task) => (
        <TaskCard
          task={task}
          multiComponent={multiComponent}
          getTasks={getTasks}
        />
      )}
    />
  );
};

export default TasksList;
