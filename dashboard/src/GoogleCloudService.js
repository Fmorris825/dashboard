import { collection, getDocs } from "firebase/firestore";
import { db } from "./config";

// Get All Task Request //
const googleFirebaseGETRequestTasks = async (
  collectionRef,
  setCollectionFunction,
  filterCompleted,
  filteredToDo
) => {
  try {
    const data = await getDocs(collectionRef);
    setCollectionFunction(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
    filterCompleted();
    filteredToDo();
  } catch (err) {
    console.log(err);
  }
};

const googleFirebaseGETRequestCollection = async (
  collectionRef,
  setCollectionFunction
) => {
  try {
    const data = await getDocs(collectionRef);
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
  googleFirebaseGETRequestCollection,
};
