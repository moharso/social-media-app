import ConfirmationDate from "../../confirmationDate/confirmationDate";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import {useState} from "react";
import {NavLink} from "react-router-dom";
import {useParams} from "react-router-dom";
import axios from "axios";

type ConfirmationProps = {
  openDialog: boolean;
  openDialogFunc: () => void;
  isDelete?: boolean;
};

const Confirmation = ({
  openDialog,
  openDialogFunc,
  isDelete,
}: ConfirmationProps) => {
  const [open, setOpen] = useState(openDialog);

  const getEmail = localStorage.getItem("email")
  const getPost = localStorage.getItem("post")

  const handleClose = () => {
    setOpen(false);
    openDialogFunc();
  };
  const {id} = useParams();

  function handleDelete() {
    async function fetchPostDetails() {
      try {
        await axios.delete(`http://localhost:4001/api/v1/posts/${id}`);
      } catch (err) {
        console.log(err);
      }
    }

    fetchPostDetails();
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className="absolute"
    >
      {isDelete ? (
        <DialogTitle id="alert-dialog-title">
          Are you sure you want to delete this post?
        </DialogTitle>
      ) : (
        <DialogTitle id="alert-dialog-title"></DialogTitle>
      )}
      <DialogContent>
        {!isDelete ? (
          <DialogContentText id="alert-dialog-description">
            <span className="w-full h-screen flex px-20 pt-10 pb-15 basis-auto bg-gray-100 dark:bg-icoDarkMode-deepBlack flex-col space-y-5 items-center">
              <span className="flex justify-center items-center flex-col h-3/6 text-2xl gap-5">
                <span className="font-bold text-3xl">
                  Your post is scheduled
                </span>
                <span className="text-sky-600 font-bold">{getEmail}</span>
                <span>"{getPost}"</span>
                <ConfirmationDate></ConfirmationDate>
              </span>
            </span>
          </DialogContentText>
        ) : null}
      </DialogContent>
      <DialogActions>
        {!isDelete ? (
          <>
            <Button onClick={handleClose}>Schedule a new post</Button>
            <NavLink to="/app">
              <Button onClick={handleClose} autoFocus>
                Go to calendar
              </Button>
            </NavLink>
          </>
        ) : (
          <>
            <Button
              onClick={() => {
                handleClose();
              }}
            >
              DISAGREE
            </Button>
            <NavLink to="/app">
              <Button
                onClick={() => {
                  handleClose();
                  handleDelete();
                }}
              >
                AGREE
              </Button>
            </NavLink>
          </>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default Confirmation;
