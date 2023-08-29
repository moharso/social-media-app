import React, { useEffect, useState } from "react";
import axios from "axios";

const UserDataComponent: React.FC = () => {
  const [userData, setUserData] = useState<any>(null);

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

  return (
    <div>
        <div>
          <h1>User Data</h1>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
        </div>
    </div>
  );
};

export default UserDataComponent;


