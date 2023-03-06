import { Avatar, List, Skeleton } from "antd";
import portrait from "../../../portrait.jpg";
import DeleteTaskButton from "./DeleteTaskButton";
import EditTaskButton from "./EditTaskButton";
import CompleteTaskButton from "./CompleteTaskButton";
import LoadingTile from "../../DashBoardPage/DashBoardPageComponents/LoadingTile";
import TaskCard from "./TaskCard";

const TasksList = ({
  list,
  setTasks,
  isLoading,
  multiComponent,
  filterCompleted,
  filteredToDo,
}) => {
  const sorted = list.sort(function (a, b) {
    return b.timestamp.valueOf() - a.timestamp.valueOf();
  });

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
          setTasks={setTasks}
          filterCompleted={filterCompleted}
          filteredToDo={filteredToDo}
        />
      )}
    />
  );
};

export default TasksList;
