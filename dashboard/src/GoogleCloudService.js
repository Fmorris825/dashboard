import {
  collection,
  getDocs,
  //   addDoc,
  //   updateDoc,
  //   doc,
  //   deleteDoc,
} from "firebase/firestore";

// Get All Task Request //
const googleFirebaseGETRequest = async (
  collectionRef,
  setCollectionFunciton,
  filterCompleted,
  filteredToDo
) => {
  try {
    const data = await getDocs(collectionRef);
    setCollectionFunciton(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
    filterCompleted();
    filteredToDo();
  } catch (err) {
    console.log(err);
  }
};

// Get All Projects Request //
// const getProjects = async () => {
//   const data = await getDocs(projectsCollectionRef);
//   setProjects(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
// };

export default { googleFirebaseGETRequest };
