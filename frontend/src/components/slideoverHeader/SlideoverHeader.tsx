import {HiOutlineTrash} from "react-icons/hi2";
import SelectedUsers from "../SelectedUsers/SelectedUsers";
import "./SlideoverHeader.css";
import Button from "../reusableComponents/button/Button";

type SlideoverHeaderProps = {
  param: string | undefined;
  account: any;
  clickDelete: () => void;
};
const SlideoverHeader = ({
  param,
  account,
  clickDelete,
}: SlideoverHeaderProps) => {
  return (
    <>
      <div className="top-0 mt-4">
        <div className="flex justify-between px-4 sm:px-6 pb-8">
          <div className="flex gap-2 font-semibold text-base items-center">
            <div className="flex items-center justify-between gap-x-1">
              <div className="max-w-[66%] flex items-center space-x-4">
                <div className="relative inline-flex items-center justify-center bg-white w-[46px] h-[46px] rounded-full dark:bg-icoDarkMode-deepBlack">
                  <SelectedUsers account={account} />
                </div>
              </div>
              <div className="flex flex-col space-y-0.5 text-sm overflow-hidden">
                <span className="text-slate-900 text-xl truncate font-bold">
                  {account.username}
                </span>
              </div>
            </div>
          </div>
          {param !== "post" ? (
            <div className="flex items-center">
              <button
                className="SlideoverBtnDel text-grayscale-180 bg-grayscale-10 rounded text-white:hover rounded inline-flex justify-center items-center w-10 h-10"
                onClick={clickDelete}
              >
                <HiOutlineTrash className="h-5 w-5 " />
              </button>
              <Button
                text=" Edit post"
                link={`?isPostCreationDone=true`}
              ></Button>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default SlideoverHeader;
