import UploadPhoto from "../../uploadPhoto/UploadPhoto";
import AddCaption from "../../addCaption/AddCaption";
import React, {useState} from "react";
import "react-datepicker/dist/react-datepicker.css";
import TopBar from "../../TopBar/TopBar";
import TimeSchedule from "../../TimeSchedule/TimeSchedule";
import CrossPost from "../../CrossPost/CrossPost";
import NavButton from "../../../reusableComponents/navButton/NavButton";

const Post = ({onClickSubmit}: any) => {
  //   props.setImage(URL.createObjectURL(event.target.files[0]));
  // };

  const [selectedImage, setSelectedImage] = useState<any>(null);

  function handlePickImage(event: any) {
    setSelectedImage(URL.createObjectURL(event.target.files[0]));
  }

  // const [newEvent, setNewEvent] = useState<any>({
  //   post: "",
  //   start: "",
  //   end: "",
  //   location: "",
  // });

  //   function () {
  //   const storedValue: any = localStorage.getItem("posting");
  //   return JSON.parse(storedValue);
  // });

  // function handleAddEvent(item: any) {
  //   if (!newEvent.post || !newEvent.start || !newEvent.end)
  //     return "Choose required fields";
  //   setNewEvent(item);
  //   setAllEvents([...allEvents, newEvent]);
  //   console.log(allEvents);
  // }

  return (
    <div className="flex flex-column w-full h-full">
      <TopBar></TopBar>
      <UploadPhoto pickImage={handlePickImage} />
      <AddCaption onClickSubmit={onClickSubmit} selectedImage={selectedImage} />
      <CrossPost></CrossPost>
    </div>
  );
};

export default Post;
