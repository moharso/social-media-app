// import {useContext} from "react";
import NavButton from "../../reusableComponents/navigationButton/NavButton";
import myUsersList from "../../data/data";
import ConfirmationDate from "../../confirmationDate/confirmationDate";
import HomePageImage from "../../reusableComponents/homepageImage/HomePageImage";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import Button from "@mui/material/Button";
import {useState, useEffect, useRef, useContext} from "react";
import {NavLink} from "react-router-dom";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const Confirmation = ({openDialog, openDialogFunc, isDelete}: any) => {
  const userName = myUsersList[0].userName;
  const [open, setOpen] = useState(openDialog);
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
    openDialogFunc();
  };
  const {id} = useParams();

  async function handleDelete() {
    async function fetchPostDetails() {
      try {
        const res = await axios.delete(
          `http://localhost:4001/api/v1/posts/${id}`
        );
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

      {/* <h2 className="font-bold text-3xl">Your post is scheduled</h2> */}

      <DialogContent>
        {!isDelete ? (
          <DialogContentText id="alert-dialog-description">
            <span className="w-full h-screen flex px-20 pt-10 pb-15 basis-auto bg-gray-100 dark:bg-icoDarkMode-deepBlack flex-col space-y-5 items-center">
              <span className="flex justify-center items-center flex-col h-3/6 text-2xl gap-5">
                <span className="font-bold text-3xl">
                  Your post is scheduled
                </span>
                <span className="text-sky-600 font-bold">username</span>
                <img src="" alt="post visual"></img>
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
        {/* <div onClick={() => navigate(-1)}> */}
        {/* <NavLink to="/app/calendar/post"> */}

        {/* </div> */}
        {/* </NavLink> */}
      </DialogActions>
    </Dialog>

    // <div className="flex w-full h-full">
    //   <div className="w-full h-screen flex px-20 pt-10 pb-15 basis-auto bg-gray-100 dark:bg-icoDarkMode-deepBlack flex-col space-y-5 items-center">
    //     <div className="flex justify-center items-center flex-col h-3/6 text-2xl gap-5">
    //       <h2 className="font-bold text-3xl">Your post is scheduled</h2>
    //       {/* <label className="text-sky-600 font-bold">{userName}</label> */}
    //       <ConfirmationDate></ConfirmationDate>
    //     </div>
    //     <div className="flex justify-end items-end h-full">
    //       {/* <NavButton
    //         buttonText="Schedule a new post"
    //         to="/post"
    //         variant="contained"
    //       ></NavButton> */}
    //       {/* <NavButton
    //         buttonText="Back to calendar"
    //         to="/app"
    //         variant="contained"
    //       ></NavButton> */}
    //     </div>
    //   </div>
    //   <HomePageImage></HomePageImage>
    // </div>
  );
};

export default Confirmation;
