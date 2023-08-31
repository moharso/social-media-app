import UploadPhoto from "../../uploadPhoto/UploadPhoto";
import AddCaption from "../../addCaption/AddCaption";
import {useState} from "react";
import "react-datepicker/dist/react-datepicker.css";
import Confirmation from "../confirmation/Confirmation";
import {useSearchParams} from "react-router-dom";

type ConfirmationProps = {
  onClickSubmit?: () => void;
  account: any;
  post: any;
  openAlert: () => void;
};

const Post = ({onClickSubmit, account, post, openAlert}: ConfirmationProps) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedImage, setSelectedImage] = useState<any>("");
  const [searchParams, setSearchParams] = useSearchParams();
  const isPostCreationDone = searchParams.get("isPostCreationDone");

  function handlePickImage(item: any) {
    setSelectedImage(item);
  }
  function handleOpenDialog() {
    setOpenDialog(!openDialog);
  }

  return (
    <div className="flex w-full h-full">
      {openDialog && (
        <Confirmation
          openDialog={openDialog}
          openDialogFunc={handleOpenDialog}
        />
      )}

      <UploadPhoto
        pickImage={handlePickImage}
        isPostCreationDone={isPostCreationDone}
        post={post}
      />
      <AddCaption
        account={account}
        selectedImage={selectedImage}
        openDialog={handleOpenDialog}
        isPostCreationDone={isPostCreationDone}
        post={post}
        openAlert={openAlert}
      />
    </div>
  );
};

export default Post;
