import { Avatar, List, Skeleton } from "antd";
import portrait from "../../../portrait.jpg";
import DeleteTaskButton from "./DeleteTaskButton";
import EditTaskButton from "./EditTaskButton";
import CompleteTaskButton from "./CompleteTaskButton";
import { FireFilled } from "@ant-design/icons";

const TaskCard = ({ task, multiComponent, getTasks }) => {
  const MultiComponent = multiComponent;

  let importance = "";
  let level = "";
  if (task.importance_level === 1) {
    importance = "red";
    level = "Critical";
  } else if (task.importance_level === 2) {
    importance = "orange";
    level = "Moderate";
  } else if (task.importance_level === 3) {
    importance = "yellow";
    level = "Low";
  } else importance = null;

  return (
    <List.Item
      actions={[
        <EditTaskButton selectedTask={task} getTasks={getTasks} />,
        <DeleteTaskButton task={task} getTasks={getTasks} />,
        <MultiComponent selectedTask={task} getTasks={getTasks} />,
      ]}
    >
      <Skeleton avatar title={false} loading={task.loading}>
        <List.Item.Meta
          avatar={<Avatar src={portrait} />}
          title={
            <div>
              <h5>
                {task.task}
                <span className={level + " importance"}>{level}</span>

                {/* <FireFilled
                  style={{
                    color: importance,
                    fontSize: "16px",
                    filter: "drop-shadow(0 0 0.1rem black)",
                    marginLeft: "5px",
                  }}
                /> */}
              </h5>
            </div>
          }
          description={task.description}
        />
        <div className="date">{task.date}</div>
      </Skeleton>
    </List.Item>
  );
};

export default TaskCard;
