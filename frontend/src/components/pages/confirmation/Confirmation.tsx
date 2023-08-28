// import {useContext} from "react";
import NavButton from "../../reusableComponents/navigationButton/NavButton";
import myUsersList from "../../data/data";
import ConfirmationDate from "../../confirmationDate/confirmationDate";
import HomePageImage from "../../reusableComponents/homepageImage/HomePageImage";

const Confirmation = ({onClickReturn}: any) => {
  // const {onClickReturn} = useContext(PostContext);
  const userName = myUsersList[0].userName;

  return (
    <div className="flex w-full h-full">
      <div className="w-full h-screen flex px-20 pt-10 pb-15 basis-auto bg-gray-100 dark:bg-icoDarkMode-deepBlack flex-col space-y-5 items-center">
        <div className="flex justify-center items-center flex-col h-3/6 text-2xl gap-5">
          <h2 className="font-bold text-3xl">Your post is scheduled</h2>
          <label className="text-sky-600 font-bold">{userName}</label>
          <ConfirmationDate></ConfirmationDate>
        </div>
        <div className="flex justify-end items-end h-full">
          <NavButton
            buttonText="Schedule a new post"
            to="/post"
            variant="contained"
          ></NavButton>
          <NavButton
            buttonText="Back to calendar"
            to="/app"
            variant="contained"
          ></NavButton>
        </div>
      </div>
      <HomePageImage></HomePageImage>
    </div>
  );
};

export default Confirmation;
