import React, { useState } from "react";
import axios from "axios";

const DeleteButton = () => {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    try {
      setLoading(true);
      const lastSavedEmail = localStorage.getItem("email");
      console.log(lastSavedEmail)

        const response = await axios.delete(`http://localhost:4001/api/delete/${lastSavedEmail}`);
        console.log("Deleted user data:", response.data);

        localStorage.removeItem("email");

        window.location.href = "/";

      setLoading(false);
    } catch (error) {
      console.error("Error deleting user data:", error);
      setLoading(false);
    }
  };

  return (
    <div>
      <button className="bg-blue-500 text-white px-2 py-1 rounded p-4" onClick={handleDelete} disabled={loading}>
        Delete User Data
      </button>
    </div>
  );
};

export default DeleteButton;
