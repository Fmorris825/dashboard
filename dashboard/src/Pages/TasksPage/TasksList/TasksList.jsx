import { Avatar, Button, List, Skeleton } from "antd";
import { useEffect, useState } from "react";
import portrait from "../../../portrait.jpg";
const count = 3;

const TasksList = ({ tasks }) => {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);

  return (
    <List
      className="taskList"
      itemLayout="horizontal"
      dataSource={tasks}
      renderItem={(task) => (
        <List.Item
          actions={[
            <a key="list-loadmore-edit">edit</a>,
            <a key="list-loadmore-more">more</a>,
          ]}
        >
          <Skeleton avatar title={false} loading={task.loading}>
            <List.Item.Meta
              avatar={<Avatar src={portrait} />}
              title={<h5>{task.task}</h5>}
              description={task.description}
            />
            <div>{task.date}</div>
          </Skeleton>
        </List.Item>
      )}
    />
  );
};

export default TasksList;
