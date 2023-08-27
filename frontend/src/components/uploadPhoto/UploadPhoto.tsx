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
    <div className="w-full h-screen flex px-20 pt-10 pb-15 max-w-[500px] basis-auto bg-gray-100 dark:bg-icoDarkMode-deepBlack flex-col space-y-5">
      <div className="UploadImg flex justify-center flex-col w-full h-96 bg-gray-200">
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
                  className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600 file:cursor-pointer"
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
