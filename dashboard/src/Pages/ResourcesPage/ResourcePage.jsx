import { Card } from "antd";
const gridStyle = {
  width: "25%",
  textAlign: "center",
};
const ResourcePage = () => {
  return (
    <Card title="Card Title">
      <Card.Grid style={gridStyle}>Content</Card.Grid>
      <Card.Grid hoverable={false} style={gridStyle}>
        Content
      </Card.Grid>
      <Card.Grid style={gridStyle}>Content</Card.Grid>
      <Card.Grid style={gridStyle}>Content</Card.Grid>
      <Card.Grid style={gridStyle}>Content</Card.Grid>
      <Card.Grid style={gridStyle}>Content</Card.Grid>
      <Card.Grid style={gridStyle}>Content</Card.Grid>
    </Card>
  );
};

export default ResourcePage;
