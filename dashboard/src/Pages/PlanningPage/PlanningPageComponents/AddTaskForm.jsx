import { DatePicker, Space } from "antd";
const onChange = (date, dateString) => {
  console.log(date, dateString);
};
const AddTaskForm = () => (
  <Space direction="vertical">
    <DatePicker onChange={onChange} />
  </Space>
);
export default AddTaskForm;
