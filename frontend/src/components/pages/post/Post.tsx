import UploadPhoto from "../../uploadPhoto/UploadPhoto";
import AddCaption from "../../addCaption/AddCaption";
import {useState, useEffect, useContext} from "react";
import "react-datepicker/dist/react-datepicker.css";
import HomePageImage from "../../reusableComponents/homepageImage/HomePageImage";
import {PostContext} from "../../../context/PostContext";
import axios from "axios";
import Confirmation from "../confirmation/Confirmation";
import {useSearchParams} from "react-router-dom";

const Post = ({onClickSubmit, account, post}: any) => {
  // const {userSelected} = useContext(PostContext);
  const [openDialog, setOpenDialog] = useState(false);
  // const [selectedAccount, setSelectedAccount] = useState({
  //   mediaIcon: "",
  //   username: "",
  // });
  const [searchParams, setSearchParams] = useSearchParams();
  const isPostCreationDone = searchParams.get("isPostCreationDone");

  const [selectedImage, setSelectedImage] = useState<any>("");
  const [selectedImage2, setSelectedImage2] = useState<any>("");

  function handlePickImage(item: any) {
    // setSelectedImage(URL.createObjectURL(item));
    setSelectedImage2(item);
  }
  function handleOpenDialog() {
    // setSelectedImage(URL.createObjectURL(item));
    setOpenDialog(!openDialog);
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
  console.log(openDialog);

  return (
    <div className="flex w-full h-full">
      {openDialog && (
        <Confirmation
          openDialog={openDialog}
          openDialogFunc={handleOpenDialog}
        />
      )}

      <>
        <UploadPhoto
          pickImage={handlePickImage}
          isPostCreationDone={isPostCreationDone}
          post={post}
        />
        <AddCaption
          selectedImage={selectedImage}
          account={account}
          selectedImage2={selectedImage2}
          openDialog={handleOpenDialog}
          isPostCreationDone={isPostCreationDone}
          post={post}
        />
      </>
    </div>
  );
};

export default Post;
