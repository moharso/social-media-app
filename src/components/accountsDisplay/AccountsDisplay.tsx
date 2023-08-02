import {useState, useMemo, useCallback} from "react";
import "./AccountsDisplay.css";
import UserData from "../data/data";
import Account from "../account/Account";

const AccountsDisplay = ({onUserSelected}: any) => {
  const [account, setAccount] = useState(UserData);
  const [selectAccount, setSelectAccount] = useState<any>(null);

  // useMemo(() => {
  //   return {};
  // });
  // useEffect(function () {
  //   console.log(buttonEl.current);
  //   buttonEl.current.focus();
  // }, []);
  // useCallback(() => {}, []);
  function handleSelectAccount(accountName: any) {
    setSelectAccount((selectAccount: any) =>
      accountName === selectAccount ? null : accountName
    );
    onUserSelected(accountName);
  }
  console.log(selectAccount);

  return (
    <div className="fixed z-20 top-6 right-6 md:right-m md:top-m md:bottom-m md:flex">
      <div className=" AccountsDisplay w-full h-full flex flex-col space-y-2 items-center">
        {account?.map((user) =>
          user.networks.map((network) => (
            <Account
              key={network.username}
              network={network}
              onSelectAccount={handleSelectAccount}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default AccountsDisplay;
