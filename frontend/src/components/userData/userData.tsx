import React, { useEffect, useState } from "react";
import axios from "axios";
import DeleteButton from "../deleteUser/deleteUser";

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
        name: newName
      });

      setUserData(response.data);
      setEditing(false);
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto rounded flex justify-center">
      {userData ? (
        <div>
          <h2 className="text-4xl font-semibold mb-4 p-4">User information</h2>
          {editing ? (
            <div className="p-4">
              <p className="mb-2">Name: <input className="border rounded p-1" type="text" value={newName} onChange={(e) => setNewName(e.target.value)} /></p>
              <button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={handleSaveClick}>Save</button>
            </div>
          ) : (
            <div>
              <p className="mb-2 p-3">Name: {userData.name}</p>
              <p className="mb-2 p-3">Email: {userData.email}</p>
              <div className="flex gap-8 p-3">
              <button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={handleEditClick}>Edit Name</button>
              <DeleteButton></DeleteButton>
              </div>
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


