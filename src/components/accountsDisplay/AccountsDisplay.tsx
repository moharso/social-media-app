import {useRef, useEffect, useContext} from "react";
import "./AccountsDisplay.css";
import UserData from "../data/data";
import Account from "../account/Account";
import {PostContext} from "../../App";

const AccountsDisplay = () => {
  const {onUserSelected} = useContext(PostContext);
  const accounts = useRef(UserData);
  const buttonEl = useRef<any>();

  function handleButton(e: any) {
    e.preventDefault();
    buttonEl.current = e.currentTarget;
  }

  useEffect(() => {
    buttonEl.current.focus();
  }, []);

  return (
    <div className="fixed z-20 bottom-72 right-0 md:right-6 w-30 md:right-m md:top-m md:bottom-m md:flex">
      <div className=" AccountsDisplay w-full h-full flex flex-col space-y-2 items-center">
        {accounts.current.map((user) =>
          user.networks.map((network) => (
            <button
              onClick={(e) => {
                onUserSelected(e, network.username);
                handleButton(e);
              }}
              ref={buttonEl}
              key={network.username}
              className="bg-blue-500 w-12 h-12 rounded-full focus:ring-offset-1 focus:ring-2 text-transparent overflow-hidden"
            >
              <Account key={network.username} network={network} />
            </button>
          ))
        )}
      </div>
    </div>
  );
};

export default AccountsDisplay;
