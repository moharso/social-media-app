import React, { useEffect, useState } from "react";
import axios from "axios";

const UserDataComponent: React.FC = () => {
  const [userData, setUserData] = useState<any>(null);
  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState("");

  useEffect(() => {
    const lastSavedEmail = localStorage.getItem("email");

    if (lastSavedEmail) {
      axios.get(`http://localhost:4001/api/get/${lastSavedEmail}`)
        .then((response) => {
          setUserData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, []);

  const handleEditClick = () => {
    setEditing(true);
    setNewName(userData.name);
  };

  const handleSaveClick = async () => {
    try {
      const response = await axios.put(`http://localhost:4001/api/update/${userData.email}`, {
        name: newName,
      });

      setUserData(response.data);
      setEditing(false);
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  return (
    <div>
      {userData ? (
        <div>
          <h1>User Data</h1>
          {editing ? (
            <div>
              <p>Name: <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} /></p>
              <button onClick={handleSaveClick}>Save</button>
            </div>
          ) : (
            <div>
              <p>Name: {userData.name}</p>
              <p>Email: {userData.email}</p>
              <button onClick={handleEditClick}>Edit Name</button>
            </div>
          )}
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );

};

export default UserDataComponent;


