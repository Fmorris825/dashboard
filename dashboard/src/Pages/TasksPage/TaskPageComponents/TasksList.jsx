import { Avatar, List, Skeleton } from "antd";
import { nextPowerOfTwo } from "three/src/math/MathUtils";
import portrait from "../../../portrait.jpg";
import DeleteTaskButton from "./DeleteTaskButton";

const TasksList = ({ tasks, getTasks }) => {
  const sorted = tasks.sort(function (a, b) {
    return b.timestamp.valueOf() - a.timestamp.valueOf();
  });

  return (
    <List
      className="taskList"
      itemLayout="horizontal"
      dataSource={tasks}
      renderItem={(task) => (
        <List.Item
          actions={[
            <button key="list-loadmore-more">edit</button>,
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
