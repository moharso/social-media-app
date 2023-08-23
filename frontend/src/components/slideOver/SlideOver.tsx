import React from "react";
import "./SlideOver.css";
import {HiOutlineTrash} from "react-icons/hi2";
// @ts-ignore
import Facebook from "../assets/facebook.svg";

const SlideOver = () => {
  return (
    <div
      className="relative z-10 ease-out duration-300 "
      // aria-labelledby="slide-over-title"
      // role="dialog"
      // aria-modal="true"
    >
      {/* <!--
    Background backdrop, show/hide based on slide-over state.

    Entering: "ease-in-out duration-500"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in-out duration-500"
      From: "opacity-100"
      To: "opacity-0"
  --> */}
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 left-20 flex max-w-full pl-10">
            {/* w-10/12 */}

            {/* <!--
          Slide-over panel, show/hide based on slide-over state.

          Entering: "transform transition ease-in-out duration-500 sm:duration-700"
            From: "translate-x-full"
            To: "translate-x-0"
          Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
            From: "translate-x-0"
            To: "translate-x-full"
        --> */}
            <div className="slide pointer-events-auto relative w-screen">
              {/* max-w-md */}
              {/* <!--
            Close button, show/hide based on slide-over state.

            Entering: "ease-in-out duration-500"
              From: "opacity-0"
              To: "opacity-100"
            Leaving: "ease-in-out duration-500"
              From: "opacity-100"
              To: "opacity-0"
          --> */}
              <div className="absolute right-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4 ">
                <button
                  type="button"
                  className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <span className="absolute -inset-2.5"></span>
                  <span className="sr-only">Close panel</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    // aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex h-full flex-col overflow-y-scroll bg-gray-100 py-6 shadow-xl">
                <div className="flex justify-between px-4 sm:px-6">
                  <div className="flex gap-2 font-semibold text-base items-center">
                    <img src={Facebook} alt=""></img>
                    <span>Account name</span>
                  </div>
                  <div className="flex items-center">
                    <button className="hover:bg-grayscale-100 text-white:hover tw-rounded inline-flex justify-center items-center w-7 h-7 ">
                      <HiOutlineTrash className="h-5 w-5 " />
                    </button>

                    <button className="px-8">Edit post</button>
                  </div>
                </div>
                <div className="relative mt-6 flex-1 px-4 sm:px-6">
                  <div className="flex flex-col justify-between">
                    <div>
                      {/* FACEBOOK */}
                      <h1>fACEBOOK</h1>
                      <div className="DesktopVersion">
                        <header className="DesktopVersionHeader">
                          <div className="DesktopVersionHeaderImg"></div>
                          <div>
                            <span className="DesktopVersionHeaderTitle">
                              Account name
                            </span>
                            <div className="DesktopVersionHeaderDate">
                              <span>1.9.2023</span>
                              <span className="DesktopVersionHeaderDateGlobe"></span>
                            </div>
                          </div>
                        </header>
                        <main className="DesktopVersionMain">
                          <span className="DesktopVersionMainText">
                            Post text
                          </span>
                          <div className="DesktopVersionMainImg">
                            <div>
                              <img></img>
                            </div>
                          </div>
                        </main>
                        <footer className="DesktopVersionFooter">
                          <div className="DesktopVersionFooterContainer">
                            <div className="DesktopVersionFooterLike"></div>
                            <span>Like</span>
                          </div>
                          <div className="DesktopVersionFooterContainer">
                            <div className="DesktopVersionFooterComment"></div>
                            <span>Comment</span>
                          </div>
                          <div className="DesktopVersionFooterContainer">
                            <div className="DesktopVersionFooterShare"></div>
                            <span>Share</span>
                          </div>
                          <div className="DesktopVersionFooterContainer">
                            <div className="DesktopVersionFooterShare"></div>
                            <span>Send</span>
                          </div>
                        </footer>
                      </div>
                      {/* INSTAGRAM */}
                      <h2>instagram</h2>
                      <div className="DesktopVersion">
                        <header className="DesktopVersionHeaderInstagram">
                          <div className="DesktopVersionHeaderImg"></div>
                          <div>
                            <span className="DesktopVersionHeaderTitleInstagram">
                              Account name
                            </span>
                          </div>
                        </header>
                        <main className="DesktopVersionMainInstagram">
                          <div className="DesktopVersionMainImg">
                            <div>
                              <img></img>
                            </div>
                          </div>
                          <div className="DesktopVersionMainIcons">
                            <div>
                              <svg
                                aria-label="Like"
                                fill="currentColor"
                                height="24"
                                viewBox="0 0 48 48"
                                width="24"
                              >
                                <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                              </svg>
                            </div>
                            <div>
                              <svg
                                aria-label="Comment"
                                fill="currentColor"
                                height="24"
                                viewBox="0 0 48 48"
                                width="24"
                              >
                                <path
                                  clip-rule="evenodd"
                                  d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                                  fill-rule="evenodd"
                                ></path>
                              </svg>
                            </div>
                            <div>
                              <svg
                                fill="currentColor"
                                height="24"
                                viewBox="0 0 48 48"
                                width="24"
                              >
                                <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
                              </svg>
                            </div>
                            <div className="margin-left">
                              <svg
                                fill="currentColor"
                                height="24"
                                viewBox="0 0 48 48"
                                width="24"
                              >
                                <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path>
                              </svg>
                            </div>
                          </div>
                          <div className="DesktopVersionMainTextInstagram">
                            <span className="DesktopVersionMainTextInstagramAcc">
                              Account name
                            </span>
                            <span> Post text</span>
                            <br></br>
                            <br></br>
                            <span>tags</span>
                          </div>
                        </main>
                        <footer className="DesktopVersionFooterInstagram">
                          <div>30.8.2023 at 16:15</div>
                        </footer>
                      </div>
                      {/* Linkedin (same as facebook) */}
                      <h2>linkedin</h2>
                      <div className="DesktopVersion">
                        <header className="DesktopVersionHeader">
                          <div className="DesktopVersionHeaderImg"></div>
                          <div>
                            <span className="DesktopVersionHeaderTitle">
                              Account name
                            </span>
                            <div className="DesktopVersionHeaderDate">
                              <span>1.9.2023</span>
                              <span className="DesktopVersionHeaderDateGlobe"></span>
                            </div>
                          </div>
                        </header>
                        <main className="DesktopVersionMain">
                          <span className="DesktopVersionMainText">
                            Post text
                          </span>
                          <div className="DesktopVersionMainImg">
                            <div>
                              <img></img>
                            </div>
                          </div>
                        </main>
                        <footer className="DesktopVersionFooterLinkedin">
                          <div className="DesktopVersionFooterContainerLinkedin">
                            <div className="DesktopVersionFooterLikelinkedin">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                data-supported-dps="24x24"
                                fill="currentColor"
                                width="24"
                                height="24"
                                focusable="false"
                              >
                                <path d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.7.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z"></path>
                              </svg>
                            </div>
                            <span>Like</span>
                          </div>
                          <div className="DesktopVersionFooterContainerLinkedin">
                            <div className="DesktopVersionFooterCommentlinkedin">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                data-supported-dps="24x24"
                                fill="currentColor"
                                width="24"
                                height="24"
                                focusable="false"
                              >
                                <path d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z"></path>
                              </svg>
                            </div>
                            <span>Comment</span>
                          </div>
                          <div className="DesktopVersionFooterContainerLinkedin">
                            <div className="DesktopVersionFooterShareLinkedin">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                data-supported-dps="24x24"
                                fill="currentColor"
                                width="24"
                                height="24"
                                focusable="false"
                              >
                                <path d="M23 12l-4.61 7H16l4-6H8a3.92 3.92 0 00-4 3.84V17a4 4 0 00.19 1.24L5.12 21H3l-.73-2.22A6.4 6.4 0 012 16.94 6 6 0 018 11h12l-4-6h2.39z"></path>
                              </svg>
                            </div>
                            <span>Share</span>
                          </div>
                          <div className="DesktopVersionFooterContainerLinkedin">
                            <div className="DesktopVersionFooterShareLinkedin">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                data-supported-dps="24x24"
                                fill="currentColor"
                                width="24"
                                height="24"
                                focusable="false"
                              >
                                <path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"></path>
                              </svg>
                            </div>
                            <span>Send</span>
                          </div>
                        </footer>
                      </div>
                      {/* TWITTER */}
                      <h1>TWITTER</h1>
                      <div className="DesktopVersion DesktopVersionTwitter">
                        <header className="DesktopVersionHeader">
                          <div className="DesktopVersionHeaderImg"></div>
                        </header>
                        <main className="DesktopVersionMain DesktopVersionMainTwitter ">
                          {/* <span className="DesktopVersionMainText">
                          Post text
                        </span> */}
                          <div className="DesktopVersionMainImg">
                            <div>
                              <span className="DesktopVersionHeaderTitle">
                                Account name @Account name date
                              </span>
                            </div>
                            <div>Post</div>
                            <div>
                              <img></img>
                            </div>

                            <div className="DesktopVersionFooterLinkedin">
                              <div className="DesktopVersionFooterContainerLinkedin">
                                <div className="DesktopVersionFooterLikelinkedin">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    data-supported-dps="24x24"
                                    fill="currentColor"
                                    width="24"
                                    height="24"
                                    focusable="false"
                                  >
                                    <path d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.7.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z"></path>
                                  </svg>
                                </div>
                                <span>Like</span>
                              </div>
                              <div className="DesktopVersionFooterContainerLinkedin">
                                <div className="DesktopVersionFooterCommentlinkedin">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    data-supported-dps="24x24"
                                    fill="currentColor"
                                    width="24"
                                    height="24"
                                    focusable="false"
                                  >
                                    <path d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z"></path>
                                  </svg>
                                </div>
                                <span>Comment</span>
                              </div>
                              <div className="DesktopVersionFooterContainerLinkedin">
                                <div className="DesktopVersionFooterShareLinkedin">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    data-supported-dps="24x24"
                                    fill="currentColor"
                                    width="24"
                                    height="24"
                                    focusable="false"
                                  >
                                    <path d="M23 12l-4.61 7H16l4-6H8a3.92 3.92 0 00-4 3.84V17a4 4 0 00.19 1.24L5.12 21H3l-.73-2.22A6.4 6.4 0 012 16.94 6 6 0 018 11h12l-4-6h2.39z"></path>
                                  </svg>
                                </div>
                                <span>Share</span>
                              </div>
                              <div className="DesktopVersionFooterContainerLinkedin">
                                <div className="DesktopVersionFooterShareLinkedin">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    data-supported-dps="24x24"
                                    fill="currentColor"
                                    width="24"
                                    height="24"
                                    focusable="false"
                                  >
                                    <path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"></path>
                                  </svg>
                                </div>
                                <span>Send</span>
                              </div>
                            </div>
                          </div>
                        </main>
                      </div>
                      {/* TWITTER */}
                      <h1>PINTEREST</h1>
                      <div className="DesktopVersion">
                        <main className="DesktopVersionMain">
                          <div className="DesktopVersionMainImg">
                            <div>Image</div>
                          </div>
                          <div className="DesktopVersionIconsPinterest">
                            <div className="DesktopVersionIconsPinterestImg">
                              <svg
                                height="24"
                                width="24"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path d="M12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3M3 9c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm18 0c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"></path>
                              </svg>
                            </div>
                            <div className="DesktopVersionIconsPinterestImg">
                              <svg height="20" width="20" viewBox="0 0 24 24">
                                <path d="M21 14c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2v-6c0-1.1.9-2 2-2s2 .9 2 2v4h14v-4c0-1.1.9-2 2-2zM8.82 8.84c-.78.78-2.05.79-2.83 0-.78-.78-.79-2.04-.01-2.82L11.99 0l6.02 6.01c.78.78.79 2.05.01 2.83-.78.78-2.05.79-2.83 0l-1.2-1.19v6.18a2 2 0 1 1-4 0V7.66L8.82 8.84z"></path>
                              </svg>
                            </div>
                            <div className="DesktopVersionIconsPinterestImg">
                              <svg height="24" width="24" viewBox="0 0 24 24">
                                <path d="M10.52 3.11a2 2 0 013.59 0l2.06 4.17c.02.06.08.1.15.11l4.6.67a2 2 0 011.1 3.41l-3.32 3.25a.2.2 0 00-.06.17l.78 4.58a2 2 0 01-2.9 2.11l-4.11-2.16a.2.2 0 00-.19 0l-4.11 2.16a2 2 0 01-2.9-2.1l.78-4.59a.2.2 0 00-.06-.17l-3.32-3.25a2 2 0 011.1-3.41l4.6-.67a.2.2 0 00.15-.1zm3.9 5.15l-1.75-3.53a.4.4 0 00-.71 0L10.2 8.26a2 2 0 01-1.5 1.1l-3.9.56a.4.4 0 00-.23.69l2.83 2.75a2 2 0 01.57 1.77L7.31 19a.4.4 0 00.58.42l3.5-1.83a2 2 0 011.86 0l3.48 1.83a.4.4 0 00.59-.42l-.67-3.88a2 2 0 01.57-1.77l2.83-2.75a.4.4 0 00-.22-.69l-3.9-.56a2 2 0 01-1.51-1.1z"></path>
                              </svg>
                            </div>
                            <button>Save</button>
                          </div>
                          <div>Post</div>
                        </main>
                        <footer className="DesktopVersionFooterPinterest">
                          {/* <div> */}
                          <div className="DesktopVersionHeaderImg"></div>
                          <span>Account name</span>
                          {/* </div> */}
                          <button>Follow</button>
                        </footer>
                      </div>
                    </div>
                    <div className="flex justify-center flex-col max-w-\[500px\] w-full ">
                      <div className="PhoneModule">
                        <div className="PhoneModule2">
                          <div className="PhoneContent">
                            <div className="PhoneHeader">
                              <div>18:37</div>
                              <div>
                                <span className="PhoneHeaderIcon">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="wifi"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 640 512"
                                    font-size="16"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M39.9 185.7C114.6 119.9 212.6 80 320 80s205.4 39.9 280.1 105.7c9.9 8.8 25.1 7.8 33.9-2.2s7.8-25.1-2.2-33.9C548.7 76.4 439.5 32 320 32S91.3 76.4 8.2 149.6c-9.9 8.8-10.9 23.9-2.2 33.9s23.9 10.9 33.9 2.2zM320 256c64.6 0 123.5 24.7 167.6 65.2c9.8 9 24.9 8.3 33.9-1.5s8.3-24.9-1.5-33.9C467.4 237.5 397.1 208 320 208s-147.4 29.5-200.1 77.9c-9.8 9-10.4 24.1-1.5 33.9s24.1 10.4 33.9 1.5C196.5 280.7 255.4 256 320 256zm56 168a56 56 0 1 0 -112 0 56 56 0 1 0 112 0z"
                                    ></path>
                                  </svg>
                                </span>
                                <span className="PhoneHeaderIcon">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="battery-low"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 576 512"
                                    font-size="16"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M464 144c17.7 0 32 14.3 32 32V336c0 17.7-14.3 32-32 32H80c-17.7 0-32-14.3-32-32V176c0-17.7 14.3-32 32-32H464zM80 96C35.8 96 0 131.8 0 176V336c0 44.2 35.8 80 80 80H464c44.2 0 80-35.8 80-80V320c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32V176c0-44.2-35.8-80-80-80H80zm80 96H96V320h64V192z"
                                    ></path>
                                  </svg>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* flex-basis: 50%; overflow: auto; padding-left: 14px;
                    padding-right: 8px; position: -webkit-sticky; position:
                    sticky; top: 0; */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideOver;
