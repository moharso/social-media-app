import React from "react";

const CloseButton = () => {
  return (
    <button
      type="button"
      className="relative rounded-md text-gray-500 hover:text-white text-gray-500 focus:outline-none focus:ring-2 focus:ring-white hover:bg-gray-500"
    >
      {/* <span className="absolute -inset-2.5"></span> */}
      <span className="sr-only">Close panel</span>
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
};

export default CloseButton;
