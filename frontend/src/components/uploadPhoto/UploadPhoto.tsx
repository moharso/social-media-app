import React from "react";
import {useState, useContext, useEffect} from "react";
import "./UploadPhoto.css";
import myUsersList from "../data/data";
import SelectedUsers from "../SelectedUsers/SelectedUsers";
import {PostContext} from "../../context/PostContext";
import axios from "axios";

const UploadPhoto = ({pickImage}: any) => {
  const {userSelected} = useContext(PostContext);
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [myUsersList, setMyUsersList] = useState({
    mediaIcon: "",
    username: "",
  });

  // useEffect(
  //   function () {
  //     async function fetchAccount() {
  //       try {
  //         const res = await axios.get(
  //           `http://localhost:4001/api/v1/accounts/${userSelected}`
  //         );
  //         setMyUsersList(res.data.data.account);
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
    <div className="w-full h-full flex items-center px-20 pt-10 pb-15 bg-gray-100  flex-col space-y-5 basis-6/12">
      <div className="UploadImg max-w-[500px] flex justify-center flex-col w-full bg-gray-200">
        <div className=" w-full text-icoGray-400 dark:text-icoDarkMode-wolf rounded-md overflow-hidden square">
          <div className="flex items-center justify-center w-full h-full">
            <div className="flex flex-col items-center text-sm w-full h-full">
              {selectedImage ? (
                // <div>
                <>
                  <img
                    alt="not found"
                    src={URL.createObjectURL(selectedImage)}
                    className="w-full h-full"
                  />

                  <button
                    onClick={() => setSelectedImage(null)}
                    className="UploadPhotoRemove"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </>
              ) : (
                <input
                  type="file"
                  name="myImage"
                  // className="block w-full h-auto text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600 file:cursor-pointer"
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
