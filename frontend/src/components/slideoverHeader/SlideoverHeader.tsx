import React, {useState, useContext, useEffect} from "react";
import {HiOutlineTrash} from "react-icons/hi2";
import SelectedUsers from "../SelectedUsers/SelectedUsers";
import {PostContext} from "../../context/PostContext";
import axios from "axios";
import "./SlideoverHeader.css";

const SlideoverHeader = () => {
  const {userSelected} = useContext(PostContext);

  const [myUsersList, setMyUsersList] = useState({
    mediaIcon: "",
    username: "",
  });
  useEffect(
    function () {
      async function fetchAccount() {
        try {
          const res = await axios.get(
            `http://localhost:4001/api/v1/accounts/${userSelected}`
          );
          setMyUsersList(res.data.data.account);
          console.log(res);
        } catch (err) {
          console.log(err);
        }
      }
      fetchAccount();
    },
    [userSelected]
  );

  return (
    <div className="sticky top-0 mt-4">
      <div className="flex justify-between px-4 sm:px-6 pb-8">
        <div className="flex gap-2 font-semibold text-base items-center">
          <div className="flex items-center justify-between gap-x-1">
            <div className="max-w-[66%] flex items-center space-x-4">
              <div className="relative inline-flex items-center justify-center bg-white w-[46px] h-[46px] rounded-full dark:bg-icoDarkMode-deepBlack">
                <SelectedUsers myUsersList={myUsersList} />
              </div>
            </div>
            <div className="flex flex-col space-y-0.5 text-sm overflow-hidden">
              <span className="text-sky-500 truncate font-bold">
                {myUsersList.username}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <button className="SlideoverBtnDel text-grayscale-180 bg-grayscale-10 hover:bg-grayscale-100 rounded text-white:hover tw-rounded inline-flex justify-center items-center w-7 h-7 ">
            <HiOutlineTrash className="h-5 w-5 " />
          </button>
          <button className="SlideoverBtn ">Edit post</button>
        </div>
      </div>
    </div>
  );
};

export default SlideoverHeader;
