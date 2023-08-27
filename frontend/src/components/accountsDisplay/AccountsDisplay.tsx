import {useRef, useEffect, useContext, useState} from "react";
import {useSearchParams, useParams} from "react-router-dom";
import "./AccountsDisplay.css";
import UserData from "../data/data";
import Account from "../account/Account";
import {PostContext} from "../../context/PostContext";
import axios from "axios";
import Spinner from "../reusableComponents/spinner/Spinner";

const AccountsDisplay = () => {
  const {onUserSelected} = useContext(PostContext);
  const [accounts, setAccounts] = useState<any>([]);
  const [searchParams, setSearchParams] = useSearchParams("");
  const [isLoading, setIsLoading] = useState(false);
  const buttonEl = useRef<any>();
  const param = useParams();

  function handleButton(e: any) {
    e.preventDefault();
    buttonEl.current = e.currentTarget;
    // setSearchParams("");
  }

  useEffect(function () {
    async function fetchAccounts() {
      try {
        setIsLoading(true);
        const res = await axios.get("http://localhost:4001/api/v1/accounts");
        setAccounts(res.data.data.accounts);
      } catch (err) {
        // setIsError(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchAccounts();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="fixed z-20 bottom-72 right-0 md:right-6 w-30 md:right-m md:top-m md:bottom-m md:flex">
      {/* {!param.id ? ( */}
      <div className=" AccountsDisplay w-full h-full flex flex-col space-y-4 items-center">
        {accounts.map((acc: any) => {
          return (
            <button
              onClick={(e) => {
                onUserSelected(e, acc._id);
                handleButton(e);
                setSearchParams({
                  social: `${acc.platform}`,
                });

                // &&profile=${acc._id
              }}
              className="bg-blue-500 w-12 h-12 rounded-full focus:ring-offset-1 focus:ring-2 text-transparent overflow-hidden"
              key={acc._id}
            >
              <Account
                key={acc._id}
                account={`http://localhost:4001/static/${acc.photo}`}
                network={`http://localhost:4001/media/${acc.mediaIcon}`}
              />
              {/* <img src={acc.photo} alt=""></img> */}
            </button>
          );
        })}
        {/* {accounts.map((user: any) =>
          user.networks.map((network: any) => (
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
        )} */}
      </div>
      {/* ) : null} */}
    </div>
  );
};

export default AccountsDisplay;
