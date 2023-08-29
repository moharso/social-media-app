import React, {useState, useEffect, useContext} from "react";
import "./SlideOver.css";
import {HiOutlineTrash} from "react-icons/hi2";
// @ts-ignore
import Facebook from "../assets/facebook.svg";
import {Link, useParams} from "react-router-dom";
import Post from "../pages/post/Post";
import UploadPhoto from "./../uploadPhoto/UploadPhoto";

import AddCaption from "./../addCaption/AddCaption";

import "react-datepicker/dist/react-datepicker.css";
import SlideoverHeader from "../slideoverHeader/SlideoverHeader";
import CloseButton from "../reusableComponents/closeButton/CloseButton";
import {PostContext} from "../../context/PostContext";
import axios from "axios";
import TemplateFb from "../mediaTemplates/TemplateFb";
import TemplateInstagram from "../mediaTemplates/TemplateInstagram";
import TemplateLinkedin from "../mediaTemplates/TemplateLinkedin";
import TemplatePinterest from "../mediaTemplates/TemplatePinterest";
import TemplateTwitter from "../mediaTemplates/TemplateTwitter";
import MobileContainer from "../reusableComponents/MobileContainer.tsx/MobileContainer";
// import HomePageImage from "../reusableComponents/homepageImage/HomePageImage";

const SlideOver = () => {
  const {userSelected} = useContext(PostContext);
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [isOpen, setIsOpen] = useState(true);
  function handleOnClick() {
    setIsOpen(false);
  }
  const {id} = useParams();

  const [account, setAccount] = useState({
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
          setAccount(res.data.data.account);
          console.log(res);
        } catch (err) {
          console.log(err);
        }
      }
      fetchAccount();
    },
    [userSelected]
  );

  // param.id === "post" ? setIsOpen(true) : setIsOpen(false);

  return (
    <>
      {isOpen ? (
        <div className="relative z-10 ">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity ease-in-out duration-300"></div>
          <div
            className={`fixed inset-0 overflow-hidden ${
              isOpen ? "translate-x-0 " : "translate-x-full"
            }`}
          >
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 left-20 flex max-w-full pl-10">
                <div className="slide pointer-events-auto relative w-screen">
                  <div className="absolute right-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4 ">
                    <CloseButton onClick={handleOnClick} to="/app" />
                  </div>
                  <div className="flex h-full flex-col overflow-y-scroll bg-gray-100 py-6 shadow-xl">
                    <SlideoverHeader param={id} account={account} />
                    {id === "post" ? (
                      <Post account={account} />
                    ) : (
                      <div className=" flex justify-between flex items-start relative mt-6 flex-1 px-4 sm:px-6">
                        <div className=" ">
                          <div className="flex flex-col">
                            <h2>Desktop</h2>
                            <TemplateFb />
                            <TemplateInstagram />
                            <TemplateLinkedin />
                            <TemplatePinterest />
                            <TemplateTwitter />
                          </div>
                        </div>
                        <div className="flex justify-center flex-col max-w-\[500px\] w-full ">
                          <h2>Mobile</h2>
                          <MobileContainer>
                            <TemplateFb />
                          </MobileContainer>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SlideOver;
