import React from "react";
import {useState} from "react";
import "./UploadPhoto.css";
import UserData from "../data/data";
import Account from "../account/Account";

const UploadPhoto = ({pickImage, userSelected}: any) => {
  // const pickImage = (event: any) => {
  //   props.setImage(URL.createObjectURL(event.target.files[0]));
  // };
  const [selectedImage, setSelectedImage] = useState<any>(null);

  // can be passed as prop
  const [account, setAccount] = useState(UserData);

  //   {
  //   start: moment("2023-08-08T10:00:00").toDate(),
  //   end: moment("2023-08-08T12:00:00").toDate(),
  //   post: "Ar is relaxing for your body... ",
  //   data: {
  //     profile: ["facebook", "linkedin"],
  //     image: Art,
  //     icon: [Facebook, Linkedin],
  //   },
  // },

  return (
    <div className="w-full h-screen flex px-20 pt-10 pb-15 max-w-[500px] basis-auto bg-gray-100 dark:bg-icoDarkMode-deepBlack flex-col space-y-5">
      <div className="flex items-center justify-between gap-x-1">
        <div className="max-w-[66%] flex items-center space-x-4">
          <div className="relative inline-flex items-center justify-center bg-white w-[46px] h-[46px] rounded-full dark:bg-icoDarkMode-deepBlack">
            {account?.map((user) =>
              user.networks.map((network) =>
                network.username === userSelected ? (
                  <Account key={network.username} network={network} />
                ) : (
                  <img
                    key={network.username}
                    src="https://cdn-prod.app.iconosquare.com/avatars/avatar-2156274.jpg"
                    alt="account"
                    className="object-fill h-full rounded-full"
                  ></img>
                )
              )
            )}
            {/* <img
              src="https://cdn-prod.app.iconosquare.com/avatars/avatar-2156274.jpg"
              alt="account"
              className="object-fill h-full rounded-full"
            ></img> */}
          </div>
        </div>
        <div className="flex flex-col space-y-0.5 text-sm overflow-hidden">
          <span className="text-sky-500 truncate font-bold">
            {userSelected}
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
      {/* <button className="flex items-center font-GSemiBold leading-none max-w-full transition duration-100 outline-none focus:outline-none justify-center text-icoBlue border-2 border-icoBlue focus:ring-2 focus:ring-icoBlue-200 focus:ring-offset-2 disabled:border-transparent disabled:bg-transparent p-5 min-h-14 min-w-150 text-sm rounded-md disabled:bg-icoGray-300 dark:disabled:bg-white/5 disabled:text-icoGray-400 dark:disabled:text-icoDarkMode-wolf disabled:cursor-not-allowed mt-8">
        Add media
      </button> */}
    </div>
  );
};

export default UploadPhoto;
