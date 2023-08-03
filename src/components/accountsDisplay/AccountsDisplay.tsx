import {useState, useMemo, useCallback, useRef, useEffect} from "react";
import "./AccountsDisplay.css";
import UserData from "../data/data";
import Account from "../account/Account";

const AccountsDisplay = ({onUserSelected}: any) => {
  const [selectAccount, setSelectAccount] = useState<any>(null);

  const accounts = useRef(UserData);

  function handleSelectAccount(accountName: any) {
    // e.preventDefault();
    // setSelectAccount((selectAccount: any) =>
    //   accountName === selectAccount ? selectAccount : accountName
    // );
    onUserSelected(accountName === selectAccount ? selectAccount : accountName);
  }

  return (
    <div className="fixed z-20 top-6 right-6 md:right-m md:top-m md:bottom-m md:flex">
      <div className=" AccountsDisplay w-full h-full flex flex-col space-y-2 items-center">
        {accounts.current.map((user) =>
          user.networks.map((network) => (
            <button
              onClick={(e) => {
                handleSelectAccount(network.username);
              }}
              key={network.username}
              className="bg-sky-500 w-12 h-12 rounded-full focus:ring-offset-1 focus:ring-2 text-transparent overflow-hidden"
            >
              <Account
                key={network.username}
                network={network}
                onSelectAccount={handleSelectAccount}
              />
            </button>
          ))
        )}
      </div>
    </div>
  );
};

export default AccountsDisplay;
