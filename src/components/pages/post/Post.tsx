import UploadPhoto from "../../uploadPhoto/UploadPhoto";
import AddCaption from "../../addCaption/AddCaption";
import React, {useState} from "react";
import "react-datepicker/dist/react-datepicker.css";

const Post = ({onClickSubmit, userSelected}: any) => {

  const [selectedImage, setSelectedImage] = useState<any>(null);

  function handlePickImage(event: any) {
    setSelectedImage(URL.createObjectURL(event.target.files[0]));
  }

  return (
    <div className="flex w-full h-full">
      <UploadPhoto pickImage={handlePickImage} userSelected={userSelected} />
      <AddCaption onClickSubmit={onClickSubmit} selectedImage={selectedImage} />
    </div>
  );
};

export default Post;
