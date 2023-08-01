import UploadPhoto from "../../uploadPhoto/UploadPhoto";
import AddCaption from "../../addCaption/AddCaption";
import React, {useState} from "react";
import "react-datepicker/dist/react-datepicker.css";

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
    <div className="flex w-full h-full">
      <UploadPhoto pickImage={handlePickImage} />
      <AddCaption onClickSubmit={onClickSubmit} selectedImage={selectedImage} />
    </div>
  );
};

export default Post;
