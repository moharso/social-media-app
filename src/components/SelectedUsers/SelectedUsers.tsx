import React, { useContext} from 'react';
import Account from '../account/Account';
import myUsersList from '../data/data';
import { PostContext } from '../../App';

const SelectedUsers = ({ myUsersList, selectedUsers }: any) => {
    const {userSelected} = useContext(PostContext);
  return (
    <div className="relative inline-flex items-center justify-center bg-white w-[46px] h-[46px] rounded-full dark:bg-icoDarkMode-deepBlack">
      {myUsersList.map((user: any) =>
        user.networks.map((network: any) => (
          selectedUsers.includes(network.username) ? (
            <Account key={network.username} network={network} />
          ) : (
            <img
              key={network.username}
              src="https://cdn-prod.app.iconosquare.com/avatars/avatar-2156274.jpg"
              alt="account"
              className="object-fill h-full rounded-full"
            ></img>
          )
        ))
      )}
    </div>
  );
};

export default SelectedUsers;
