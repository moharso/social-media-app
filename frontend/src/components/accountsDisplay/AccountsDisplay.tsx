import {useRef, useEffect, useContext, useState, useMemo} from "react";
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
  const buttonEl = useRef<any>(null);
  const param = useParams();
  const [active, setIsActive] = useState(false);

  function handleButton(e: any, acc: any) {
    setIsActive(acc);
    // e.preventDefault();
    buttonEl.current = e.currentTarget;
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
  // console.log("active2", active2);
  console.log("active", active);
  useEffect(() => {
    if (buttonEl.current) buttonEl.current.focus();
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
                handleButton(e, acc);
                setSearchParams({
                  social: `${acc.platform}`,
                });
              }}
              className={`bg-blue-500 w-12 h-12 rounded-full  text-transparent overflow-hidden focus:ring-offset-1 focus:ring-2 ${
                active === acc ? "Active" : ""
              }`}
              ref={buttonEl}
              key={acc._id}
            >
              <Account
                key={acc._id}
                account={`http://localhost:4001/static/${acc.photo}`}
                network={`http://localhost:4001/media/${acc.mediaIcon}`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default AccountsDisplay;
