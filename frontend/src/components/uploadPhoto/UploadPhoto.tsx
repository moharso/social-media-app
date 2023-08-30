import React from "react";
import {useState, useContext, useEffect, FC} from "react";
import "./UploadPhoto.css";
import myUsersList from "../data/data";
import SelectedUsers from "../SelectedUsers/SelectedUsers";
import {PostContext} from "../../context/PostContext";
import axios from "axios";
import {Tooltip} from "@mui/material";

interface Props {}

const UploadPhoto = ({pickImage, children, isPostCreationDone, post}: any) => {
  const {userSelected} = useContext(PostContext);
  const [selectedImage, setSelectedImage] = useState<any>(
    ""
    // isPostCreationDone ? `http://localhost:4001/post/${post.image})` : ""
  );

  //   function DynamicImage({ imageName }) {
  //   const imagePath = ./images/${imageName};

  //   // Dynamically import the image using import()
  //   const ImageComponent = React.lazy(() => import(${imagePath}));

  //   return <ImageComponent />;
  // }

  // console.log(URL.createObjectURL(selectedImage));
  // const [myUsersList, setMyUsersList] = useState({
  //   mediaIcon: "",
  //   username: "",
  // });

  // const handleFileChange = (e: any) => {
  //   const img = {
  //     preview: URL.createObjectURL(e.target.files[0]),
  //     data: e.target.files[0],
  //   };
  //   setSelectedImage(img.data);
  // };

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
            <div className="flex flex-col items-center text-sm w-full h-full relative">
              {selectedImage ? (
                // <div>
                <>
                  <img
                    alt="not found"
                    src={URL.createObjectURL(selectedImage)}
                    className="w-full h-full"
                  />
                  <Tooltip title="Delete" arrow>
                    <button
                      onClick={() => {
                        setSelectedImage("");
                        pickImage("");
                      }}
                      className="UploadPhotoRemove absolute bottom-2 right-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                  </Tooltip>
                </>
              ) : (
                <input
                  id="photo"
                  type="file"
                  accept="image/*"
                  name="image"
                  onChange={(e: any) => {
                    pickImage(e.target.files[0]);
                    setSelectedImage(e.target.files[0]);
                  }}
                ></input>

                // <input
                //   type="file"
                //   name="image"
                //   accept="image/*"

                //   onChange={(e: any) => {
                //     pickImage(e.target.files[0]);
                //     setSelectedImage(e.target.files[0]);
                //   }}
                //   // onChange={handleFileChange}
                // />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPhoto;
