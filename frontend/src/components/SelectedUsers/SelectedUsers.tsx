import React, {useContext, useEffect, useState} from "react";
import Account from "../account/Account";
import {PostContext} from "../../context/PostContext";
import axios from "axios";

const SelectedUsers = ({account}: any) => {
  return (
    <div className="relative inline-flex items-center justify-center bg-white w-[46px] h-[46px] rounded-full dark:bg-icoDarkMode-deepBlack">
      {account?.mediaIcon ? (
        <img
          alt=""
          src={`http://localhost:4001/media/${account.mediaIcon}`}
        ></img>
      ) : (
        <img
          src="https://cdn-prod.app.iconosquare.com/avatars/avatar-2156274.jpg"
          alt="account"
          className="object-fill h-full rounded-full"
        ></img>
      )}

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
