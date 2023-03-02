import { Card } from "antd";
const gridStyle = {
  width: "25%",
  textAlign: "center",
};

const ResourceList = ({ listArray, listTitle }) => {
  return (
    <Card title={<h3>{listTitle}</h3>}>
      {listArray.map((resource) => {
        return (
          <Card.Grid style={gridStyle}>
            <a href={resource.url} target="_blank">
              <div>
                <b>{resource.name}</b>
              </div>{" "}
            </a>
            <div>{resource.description}</div>{" "}
          </Card.Grid>
        );
      })}
    </Card>
  );
};

export default ResourceList;
