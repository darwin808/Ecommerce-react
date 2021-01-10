import React from "react";
import firebase from "./FbConfig.js/FbConfig";

const FileUpload = () => {
  const handlechange = (e) => {
    const file = e.target.files[0];

    const fileref = firebase.storage().ref().child(file.name);
    fileref.put(file).then(() => {
      console.log("addad", file.name);
    });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form action="submit" onSubmit={handlesubmit}>
        <input type="file" onChange={handlechange} />
        <input type="text" />
      </form>
    </div>
  );
};

export default FileUpload;
