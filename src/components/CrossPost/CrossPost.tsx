import React, { useState, useContext } from 'react';
import Switch from "@mui/material/Switch";
import Checkbox from "@mui/material/Checkbox";
import myUsersList from '../data/data';
import { PostContext } from '../../App';
import UserData from "../data/data";

const CrossPost: React.FC = () => {
  const [formVisible, setFormVisible] = useState<boolean>(false);
  const { setUserSelected } = useContext(PostContext);

  const activatedSlider = () => {
    setFormVisible(!formVisible);
  };

  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [account, setAccount] = useState(UserData);

  const handleSelected = (e: any, account: any) => {
    e.preventDefault();
    setUserSelected((prevaccount: any) => [...prevaccount, account]);
  };

  const handleCheckboxChange = (network: any) => {
    const username = network.username;
    setSelectedUsers((prevSelectedUsers) => {
      if (prevSelectedUsers.includes(username)) {
        return prevSelectedUsers.filter((user) => user !== username);
      } else {
        return [...prevSelectedUsers, username];
      }
    });
    setFormVisible(true);
  };

  return (
    <div>
      <h1>Crosspost</h1>
      <Switch checked={formVisible} onChange={activatedSlider} />
      {formVisible && (
        <form>
          {account?.map((user) =>
            user.networks.map((network) => (
              <label key={network.name}>
                <Checkbox
                  checked={selectedUsers.includes(network.username)}
                  onChange={() => handleCheckboxChange(network)}
                />
                {network.name}
              </label>
            ))
          )}
        </form>
      )}
    </div>
  );
};

export default CrossPost;
