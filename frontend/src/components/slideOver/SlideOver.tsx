import React, {useState, useEffect, useContext} from "react";
import "./SlideOver.css";
import {HiOutlineTrash} from "react-icons/hi2";
// @ts-ignore
import Facebook from "../assets/facebook.svg";
import {Link, useNavigate, useParams} from "react-router-dom";
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
import Confirmation from "../pages/confirmation/Confirmation";

// import HomePageImage from "../reusableComponents/homepageImage/HomePageImage";

const SlideOver = () => {
  const {userSelected} = useContext(PostContext);
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [isOpen, setIsOpen] = useState(true);
  const [post, setPost] = useState<any>({});
  const navigate = useNavigate();
  function handleOnClick() {
    setIsOpen(false);
  }
  const [isDelete, setIsDelete] = useState(false);

  const {id} = useParams();
  console.log(id);
  const [account, setAccount] = useState<any>({});
  console.log(id === "post");

  function handleDelete() {
    setIsDelete(true);
  }

  useEffect(
    function () {
      async function fetchAccount() {
        try {
          const res = await axios.get(
            `http://localhost:4001/api/v1/accounts/${userSelected}`
          );
          setAccount(res.data.data.account);
          // console.log("FIRST FETCH RUN", res.data.data.account);
        } catch (err) {
          console.log(err);
        }
      }
      fetchAccount();
    },
    [userSelected]
  );

  useEffect(
    function () {
      async function fetchPostDetails() {
        try {
          const res = await axios.get(
            `http://localhost:4001/api/v1/posts/${id}`
          );
          setPost(res.data.data.post);
          setAccount(res.data.data.post.account);
        } catch (err) {
          console.log(err);
        }
      }

      fetchPostDetails();
    },
    [id]
  );

  return (
    <>
      {/* {isOpen ? ( */}
      <div className="relative z-10 ">
        <div
          onClick={() => navigate(-1)}
          className="fixed inset-0 bg-gray-500 bg-opacity-75"
        ></div>

        <div
          className={`fixed inset-0 overflow-hidden transition ease-in-out delay-150  ${
            isOpen ? "translate-x-0 " : "translate-x-full "
          }`}
        >
          <div className="absolute inset-0 overflow-hidden ">
            <div className="pointer-events-none fixed inset-y-0 left-20 flex max-w-full pl-10 transition ease-in-out delay-150 ">
              <div className="slide pointer-events-auto relative w-screen ">
                <div className="absolute right-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                  <CloseButton onClick={handleOnClick} to="/app" />
                </div>
                <div className="flex h-full flex-col overflow-y-scroll bg-gray-100 py-6 shadow-xl ">
                  <SlideoverHeader
                    param={id}
                    account={account}
                    clickDelete={handleDelete}
                  />
                  {id === "post" ? (
                    <Post account={account} />
                  ) : (
                    <div className=" flex items-start relative mt-6 flex-1 px-4 sm:px-6">
                      <div className=" flex max-w-\[500px\]">
                        <div className="flex flex-col items-center">
                          <div className="SlideOverImgV">
                            <span>
                              <svg
                                focusable="false"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                fontSize="16"
                              >
                                <path
                                  fill="currentColor"
                                  d="M512 48H64c-8.8 0-16 7.2-16 16V256H528V64c0-8.8-7.2-16-16-16zm64 208v48 48c0 35.3-28.7 64-64 64H364.3l8 48H424c13.3 0 24 10.7 24 24s-10.7 24-24 24H352 224 152c-13.3 0-24-10.7-24-24s10.7-24 24-24h51.7l8-48H64c-35.3 0-64-28.7-64-64V304 256 64C0 28.7 28.7 0 64 0H512c35.3 0 64 28.7 64 64V256zM48 304v48c0 8.8 7.2 16 16 16H239.5c.3 0 .6 0 .8 0h95.2c.3 0 .6 0 .8 0H512c8.8 0 16-7.2 16-16V304H48zM252.3 464h71.3l-8-48H260.3l-8 48z"
                                ></path>
                              </svg>
                            </span>
                            <span>Desktop</span>
                          </div>
                          {(() => {
                            switch (post.account?.platform) {
                              case "facebook":
                                return (
                                  <TemplateFb
                                    postText={post.post}
                                    name={post.account.username}
                                    img={`http://localhost:4001/post/${post.image}`}
                                  />
                                );
                              case "instagram":
                                return (
                                  <TemplateInstagram
                                    postText={post.post}
                                    name={post.account.username}
                                    img={`http://localhost:4001/post/${post.image}`}
                                  />
                                );
                              case "linkedin":
                                return (
                                  <TemplateLinkedin
                                    postText={post.post}
                                    name={post.account.username}
                                    img={`http://localhost:4001/post/${post.image}`}
                                  />
                                );
                              case "pinterest":
                                return (
                                  <TemplatePinterest
                                    postText={post.post}
                                    name={post.account.username}
                                    img={`http://localhost:4001/post/${post.image}`}
                                  />
                                );
                              case "twitter":
                                return (
                                  <TemplateTwitter
                                    postText={post.post}
                                    name={post.account.username}
                                    img={`http://localhost:4001/post/${post.image}`}
                                  />
                                );
                              default:
                                return null;
                            }
                          })()}
                        </div>
                      </div>
                      <div className="flex items-center flex-col max-w-\[500px\] w-full ">
                        <div className="SlideOverImgV">
                          <span>
                            <svg
                              focusable="false"
                              data-prefix="far"
                              data-icon="mobile"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 384 512"
                              fontSize="16"
                            >
                              <path
                                fill="currentColor"
                                d="M80 48c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H304c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H80zM16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM160 400h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
                              ></path>
                            </svg>
                          </span>
                          <span>Desktop</span>
                        </div>

                        {(() => {
                          switch (post.account?.platform) {
                            case "facebook":
                              return (
                                <MobileContainer>
                                  <TemplateFb
                                    postText={post.post}
                                    name={post.account.username}
                                    img={`http://localhost:4001/post/${post.image}`}
                                  />
                                </MobileContainer>
                              );
                            case "instagram":
                              return (
                                <MobileContainer>
                                  <TemplateInstagram
                                    postText={post.post}
                                    name={post.account.username}
                                    img={`http://localhost:4001/post/${post.image}`}
                                  />
                                </MobileContainer>
                              );
                            case "linkedin":
                              return (
                                <MobileContainer>
                                  <TemplateLinkedin
                                    postText={post.post}
                                    name={post.account.username}
                                    img={`http://localhost:4001/post/${post.image}`}
                                  />
                                </MobileContainer>
                              );
                            case "pinterest":
                              return (
                                <MobileContainer>
                                  <TemplatePinterest
                                    postText={post.post}
                                    name={post.account.username}
                                    img={`http://localhost:4001/post/${post.image}`}
                                  />
                                </MobileContainer>
                              );
                            case "twitter":
                              return (
                                <MobileContainer>
                                  <TemplateTwitter
                                    postText={post.post}
                                    name={post.account.username}
                                    img={`http://localhost:4001/post/${post.image}`}
                                  />
                                </MobileContainer>
                              );
                            default:
                              return null;
                          }
                        })()}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ) : null} */}
    </>
  );
};

export default SlideOver;
