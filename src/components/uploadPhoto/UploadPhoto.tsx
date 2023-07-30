import React from "react";
import {useMemo, useState} from "react";
import "./UploadPhoto.css";

const UploadPhoto = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="w-full h-screen flex px-20 pt-10 pb-15 max-w-[500px] basis-auto bg-gray-100 dark:bg-icoDarkMode-deepBlack flex-col space-y-5">
      <div className="flex items-center justify-between gap-x-1">
        <div className="max-w-[66%] flex items-center space-x-4">
          <div className="relative inline-flex items-center justify-center bg-white w-[46px] h-[46px] rounded-full dark:bg-icoDarkMode-deepBlack">
            <img
              src="https://cdn-prod.app.iconosquare.com/avatars/avatar-2156274.jpg"
              alt="account image"
              className="object-fill h-full rounded-full"
            ></img>
          </div>
        </div>
        <div className="flex flex-col space-y-0.5 text-sm overflow-hidden">
          <span className="text-icoBlue truncate">user ID</span>
          <span className="text-icoGray-500 text-xs dark:text-icoDarkMode-wolf truncate">
            my name
          </span>
        </div>
      </div>
      <div className="flex justify-center flex-col w-full h-96 bg-gray-200">
        <div className=" w-full text-icoGray-400 dark:text-icoDarkMode-wolf rounded-md overflow-hidden square">
          <div className="flex  items-center justify-center w-full">
            <div className="flex flex-col items-center space-y-3 text-sm">
              {selectedImage && (
                <div>
                  <img
                    alt="not found"
                    width={"100%"}
                    src={URL.createObjectURL(selectedImage)}
                  />
                  <br />
                  <button onClick={() => setSelectedImage(null)}>Remove</button>
                </div>
              )}

              {!selectedImage && (
                <input
                  type="file"
                  name="myImage"
                  onChange={(e: any) => {
                    console.log(e.target.files[0]);
                    setSelectedImage(e.target.files[0]);
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      {/* <button className="flex items-center font-GSemiBold leading-none max-w-full transition duration-100 outline-none focus:outline-none justify-center text-icoBlue border-2 border-icoBlue focus:ring-2 focus:ring-icoBlue-200 focus:ring-offset-2 disabled:border-transparent disabled:bg-transparent p-5 min-h-14 min-w-150 text-sm rounded-md disabled:bg-icoGray-300 dark:disabled:bg-white/5 disabled:text-icoGray-400 dark:disabled:text-icoDarkMode-wolf disabled:cursor-not-allowed mt-8">
        Add media
      </button> */}
    </div>
  );
};

export default UploadPhoto;
