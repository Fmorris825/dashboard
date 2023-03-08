import { collection, getDocs } from "firebase/firestore";
import { db } from "./config";

const tasksCollectionRef = collection(db, "Tasks");

const projectsCollectionRef = collection(db, "Projects");

// Get All Task Request //
const googleFirebaseGETRequestTasks = async (
  setCollectionFunction,
  filterCompleted,
  filteredToDo
) => {
  try {
    const data = await getDocs(tasksCollectionRef);
    setCollectionFunction(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
    filterCompleted();
    filteredToDo();
  } catch (err) {
    console.log(err);
  }
};

const googleFirebaseGETRequestProjects = async (setCollectionFunction) => {
  try {
    const data = await getDocs(projectsCollectionRef);
    setCollectionFunction(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  } catch (err) {
    console.log(err);
  }
};

// Get All Projects Request //
// const getProjects = async () => {
//   const data = await getDocs(projectsCollectionRef);
//   setProjects(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
// };

export default {
  googleFirebaseGETRequestTasks,
  googleFirebaseGETRequestProjects,
};
