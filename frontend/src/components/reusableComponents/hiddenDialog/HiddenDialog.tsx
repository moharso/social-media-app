import React from "react";

const HiddenDialog = ({children, action, clickClose}: any) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <a href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
        </a>
        <button
          onClick={clickClose}
          type="button"
          className="-m-2.5 rounded-md p-2.5 text-gray-700"
        >
          <span className="sr-only">Close menu</span>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="mt-6 flow-root">
        <div className="-my-6 divide-y divide-gray-500/10">
          <div className="space-y-2 py-6">{children}</div>
          <div className="py-6">
            <button
              className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            >
              
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HiddenDialog;
