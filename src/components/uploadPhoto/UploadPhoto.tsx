import React from "react";
import {useState, useContext} from "react";
import "./UploadPhoto.css";
import UserData from "../data/data";
import Account from "../account/Account";
import {PostContext} from "../../App";
import myUsersList from "../data/data";
import SelectedUsers from "../SelectedUsers/SelectedUsers";


const UploadPhoto = ({pickImage}: any) => {
  const {userSelected} = useContext(PostContext);
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [account, setAccount] = useState(UserData);
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);

  const username = myUsersList[0].userName

  return (
    <div className="w-full h-screen flex px-20 pt-10 pb-15 max-w-[500px] basis-auto bg-gray-100 dark:bg-icoDarkMode-deepBlack flex-col space-y-5">
      <div className="flex items-center justify-between gap-x-1">
        <div className="max-w-[66%] flex items-center space-x-4">
          <div className="relative inline-flex items-center justify-center bg-white w-[46px] h-[46px] rounded-full dark:bg-icoDarkMode-deepBlack">
          <SelectedUsers myUsersList={myUsersList} selectedUsers={selectedUsers} />
          </div>
        </div>
        <div className="flex flex-col space-y-0.5 text-sm overflow-hidden">

          <span className="text-sky-500 truncate font-bold">
           {username}
          </span>
        </div>
      </div>
      <div className="flex justify-center flex-col w-full h-96 bg-gray-200">
        <div className=" w-full text-icoGray-400 dark:text-icoDarkMode-wolf rounded-md overflow-hidden square">
          <div className="flex  items-center justify-center w-full">
            <div className="flex flex-col items-center space-y-3 text-sm">
              {selectedImage ? (
                <div>
                  <img
                    alt="not found"
                    width={"100%"}
                    src={URL.createObjectURL(selectedImage)}
                  />
                  <br />
                  <br />
                  <button onClick={() => setSelectedImage(null)}>Remove</button>
                </div>
              ) : (
                <input
                  type="file"
                  name="myImage"
                  className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100"
                  onChange={(e: any) => {
                    pickImage(e);
                    setSelectedImage(e.target.files[0]);
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPhoto;
