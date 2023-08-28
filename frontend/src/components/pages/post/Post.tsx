import UploadPhoto from "../../uploadPhoto/UploadPhoto";
import AddCaption from "../../addCaption/AddCaption";
import {useState, useEffect, useContext} from "react";
import "react-datepicker/dist/react-datepicker.css";
import HomePageImage from "../../reusableComponents/homepageImage/HomePageImage";
import {PostContext} from "../../../context/PostContext";
import axios from "axios";

const Post = ({onClickSubmit, account}: any) => {
  // const {userSelected} = useContext(PostContext);

  // const [selectedAccount, setSelectedAccount] = useState({
  //   mediaIcon: "",
  //   username: "",
  // });

  const [selectedImage, setSelectedImage] = useState<any>(null);

  function handlePickImage(image: any) {
    // setSelectedImage(URL.createObjectURL(event.target.files[0]));
    setSelectedImage(image);
  }

  // useEffect(
  //   function () {
  //     async function fetchAccount() {
  //       try {
  //         const res = await axios.get(
  //           `http://localhost:4001/api/v1/accounts/${userSelected}`
  //         );
  //         setSelectedAccount(res.data.data.account);
  //         console.log(res);
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     }
  //     fetchAccount();
  //   },
  //   [userSelected]
  // );

  return (
    <div className="flex w-full h-full">
      <UploadPhoto pickImage={handlePickImage} />
      <AddCaption selectedImage={selectedImage} account={account} />
      {/* <HomePageImage /> */}
    </div>
  );
};

export default Post;
