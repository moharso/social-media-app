import UploadPhoto from "../../uploadPhoto/UploadPhoto";
import AddCaption from "../../addCaption/AddCaption";
import {useState} from "react";
import "react-datepicker/dist/react-datepicker.css";
import HomePageImage from "../../reusableComponents/homepageImage/HomePageImage";

const Post = ({onClickSubmit}: any) => {
  const [selectedImage, setSelectedImage] = useState<any>(null);

  function handlePickImage(event: any) {
    setSelectedImage(URL.createObjectURL(event.target.files[0]));
  }

  return (
    <div className="flex w-full h-full">
      <UploadPhoto pickImage={handlePickImage} />
      <AddCaption selectedImage={selectedImage} />
      {/* <HomePageImage /> */}
    </div>
  );
};

export default Post;
