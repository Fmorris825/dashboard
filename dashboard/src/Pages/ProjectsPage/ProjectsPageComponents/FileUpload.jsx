import { useEffect, useState } from "react";
import { uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../../../config";
import { v4 } from "uuid";
import { ref as storageRef } from "firebase/storage";
import { ref as dbRef } from "firebase/database";
import { async } from "@firebase/util";
import { app, db } from "../../../config";

const FileUpload = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);

  const imageListRef = storageRef(storage);
  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = storageRef(storage, imageUpload.name);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageList((prev) => [...prev, url]);
      });
      alert("Image Uploaded");
    });
  };

  // useEffect(() => {
  //   listAll(imageListRef).then((response) => {
  //     response.items.forEach((item) => {
  //       getDownloadURL(item).then((url) => {
  //         setImageList((prev) => [...prev, url]);
  //       });
  //     });
  //   });
  // }, []);
  console.log(imageList);
  //   const onFileChange = async (e) => {
  //     const file = e.target.files[0];
  //     const storageRef = app.storage().ref();
  //     const fileRef = storageRef.child(file.name);
  //     await fileRef.put(file);
  //     setFileUrl(await fileRef.getDownloadURL());
  //   };

  //   const onSubmit = (e) => {
  //     e.preventDefault();
  //     const username = e.target.username.value;
  //     if (username) {
  //       return;
  //     }
  //     db.collection("Projects").doc(username).set({
  //         name: username,
  //         avatar: fileUrl
  //     })
  //   };

  //   useEffect(()=>{
  //     const fetchProjects =async ()=> {
  //         const [fileUrl, Set]
  //     }
  //   })
  return (
    <div>
      {/* <form onSubmit={onSubmit}>
        {" "}
        <input type="file" onChange={onFileChange} />
        <input type="text" name="username" placeholder="NAME" />
        <button>submit</button>
      </form> */}
      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <button onClick={uploadImage}>Upload Image</button>
      {/* {imageList.map((url) => {
        return <img src={url} />;
      })} */}
    </div>
  );
};

export default FileUpload;
