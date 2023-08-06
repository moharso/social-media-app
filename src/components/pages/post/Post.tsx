import UploadPhoto from "../../uploadPhoto/UploadPhoto";
import AddCaption from "../../addCaption/AddCaption";
import {useState} from "react";
import "react-datepicker/dist/react-datepicker.css";
import TopBar from "../../TopBar/TopBar";
import TimeSchedule from "../../TimeSchedule/TimeSchedule";
import CrossPost from "../../CrossPost/CrossPost";
import NavButton from "../../../reusableComponents/navButton/NavButton";

const Post = ({onClickSubmit}: any) => {
  const [selectedImage, setSelectedImage] = useState<any>(null);

  function handlePickImage(event: any) {
    setSelectedImage(URL.createObjectURL(event.target.files[0]));
  }

  return (

    <div className="flex w-full h-full">
      <TopBar></TopBar>
      <UploadPhoto pickImage={handlePickImage}  />
      <AddCaption  selectedImage={selectedImage} />
       <CrossPost></CrossPost>

    </div>
  );
};

export default Post;
