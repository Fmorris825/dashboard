import ResourceList from "./ResourceList";
import ResourcData from "../../ResourcData";
import "./ResourcePage.css";

const ResourcePage = () => {
  return (
    <div className="ResourceListContainer">
      <ResourceList
        listArray={ResourcData.generalResources}
        listTitle="General Resources"
      />
      <ResourceList
        listArray={ResourcData.librariesAndFrameworks}
        listTitle="Libraries & Frameworks"
      />
      <ResourceList
        listArray={ResourcData.stylingResources}
        listTitle="Styling Resources"
      />
      <ResourceList
        listArray={ResourcData.learningResources}
        listTitle="Learning Resources"
      />
    </div>
  );
};

export default ResourcePage;
