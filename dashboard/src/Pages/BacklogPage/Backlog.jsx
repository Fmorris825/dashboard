import { useState } from "react";
import Header from "../../components/Header";
import TasksList from "../TasksPage/TaskPageComponents/TasksList";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";
import CompleteTaskButton from "../TasksPage/TaskPageComponents/CompleteTaskButton";
import { db } from "../../config";
import { collection } from "firebase/firestore";
import GoogleCloudService from "../../GoogleCloudService";
import { useEffect } from "react";
import LoadingTile from "../DashBoardPage/DashBoardPageComponents/LoadingTile";
import AddTaskModal from "../TasksPage/TaskPageComponents/AddTaskModal";

const Backlog = ({}) => {
  const [backlog, setBacklog] = useState(false);
  const backlogCollectionRef = collection(db, "Backlog");
  console.log(backlog);
  useEffect(() => {
    GoogleCloudService.googleFirebaseGETRequestCollection(
      backlogCollectionRef,
      setBacklog
    );
  }, []);

  if (!backlog) {
    return (
      <div className="loadingContainer">
        <LoadingTile />
      </div>
    );
  }
  return (
    <div className="Container">
      <Header headerText="Future Ideas" />
      <div>
        <AddTaskModal
          GoogleService={GoogleCloudService.googleFirebaseGETRequestCollection}
          collectionRef={backlogCollectionRef}
          selectedProject={null}
          setterFunction={setBacklog}
        />
      </div>
      <ErrorBoundary FallbackComponent={OurFallbackComponent}>
        <TasksList list={backlog} multiComponent={CompleteTaskButton} />
      </ErrorBoundary>
    </div>
  );
};
const OurFallbackComponent = ({
  error,
  componentStack,
  resetErrorBoundary,
}) => {
  return (
    <div>
      <h1>An error occurred: {error.message}</h1>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

export default Backlog;
