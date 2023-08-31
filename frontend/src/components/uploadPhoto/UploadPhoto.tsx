import React from "react";
import {useState} from "react";
import "./UploadPhoto.css";
import {Tooltip} from "@mui/material";

interface UploadPhotoProps {
  pickImage: (item: any) => void;
  isPostCreationDone: string | null;
  post: any;
}

const UploadPhoto = ({
  pickImage,
  isPostCreationDone,
  post,
}: UploadPhotoProps) => {
  const [selectedImage, setSelectedImage] = useState<any>(
    isPostCreationDone ? post.image : ""
  );

  return (
    <div className="w-full h-full flex items-center px-20 pt-10 pb-15 bg-gray-100  flex-col space-y-5 basis-6/12">
      <div className="UploadImg max-w-[500px] flex justify-center flex-col w-full bg-gray-200">
        <div className=" w-full text-icoGray-400 dark:text-icoDarkMode-wolf rounded-md overflow-hidden square">
          <div className="flex items-center justify-center w-full h-full">
            <div className="flex flex-col items-center text-sm w-full h-full relative">
              {selectedImage ? (
                <>
                  <img
                    alt="not found"
                    src={
                      typeof selectedImage !== "string"
                        ? URL.createObjectURL(selectedImage)
                        : `http://localhost:4001/post/${selectedImage}`
                    }
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
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPhoto;
