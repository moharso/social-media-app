import React, {useState, useContext} from "react";
import Switch from "@mui/material/Switch";
import Checkbox from "@mui/material/Checkbox";
// import myUsersList from "../data/data";
import {PostContext} from "../../context/PostContext";
import UserData from "../data/data";

const CrossPost: React.FC = () => {
  const [formVisible, setFormVisible] = useState<boolean>(false);
  const {onUserSelected} = useContext(PostContext);
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [account, setAccount] = useState(UserData);
  const activatedSlider = () => {
    setFormVisible(!formVisible);
  };

  const handleCheckboxChange = (e: any, network: any) => {
    const username = network.username;
    onUserSelected(e, username);

    setSelectedUsers((prevSelectedUsers) => {
      if (selectedUsers.includes(username)) {
        return selectedUsers.filter((user) => user !== username);
      } else {
        return [...selectedUsers, username];
      }
    });
    setFormVisible(true);
  };

  return (
    <div className="flex flex-col">
      <h1>Crosspost</h1>
      <Switch checked={formVisible} onChange={activatedSlider} />
      {formVisible && (
        <div>
          {account?.map((user) =>
            user.networks.map((network) => (
              <label key={network.name}>
                <Checkbox
                  checked={selectedUsers.includes(network.username)}
                  onChange={(e) => handleCheckboxChange(e, network)}
                />
                {network.name}
              </label>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default CrossPost;
