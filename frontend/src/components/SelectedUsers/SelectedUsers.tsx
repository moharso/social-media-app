import React, {useContext, useEffect, useState} from "react";
import Account from "../account/Account";
import {PostContext} from "../../context/PostContext";
import axios from "axios";

const SelectedUsers = () => {
  const {userSelected} = useContext(PostContext);

  const [myUsersList, setMyUsersList] = useState({});

  console.log(userSelected);

  useEffect(function () {
    async function fetchAccount() {
      try {
        const res = await axios.get(
          `http://localhost:4001/api/v1/accounts/${userSelected}`
        );
        setMyUsersList(res);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    }
    fetchAccount();
  }, []);

  return (
    <div className="relative inline-flex items-center justify-center bg-white w-[46px] h-[46px] rounded-full dark:bg-icoDarkMode-deepBlack">
      {/* {myUsersList.map((user: any) =>
        user.networks.map((network: any) =>
          userSelected.includes(network.username) ? (
            <Account key={network.username} network={network} />
          ) : (
            <img
              key={network.username}
              src="https://cdn-prod.app.iconosquare.com/avatars/avatar-2156274.jpg"
              alt="account"
              className="object-fill h-full rounded-full"
            ></img>
          )
        )
      )} */}
    </div>
  );
};

export default SelectedUsers;
