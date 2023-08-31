import React, { useState } from "react";
import axios from "axios";

interface LoginFormProps {
  onLogin: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await axios.post("http://localhost:4001/api/login", { email, password });
      console.log("Login successful");
      onLogin(email, password);
      localStorage.setItem("email", email);
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Email or Password is wrong!");
    }
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>Email:</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          className="mt-1 p-2 border rounded w-full"
        />
        </div>
        <div>
        <label>Password:</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          className="mt-1 p-2 border rounded w-full"
        />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Sign in</button>
        {errorMessage && <p>{errorMessage}</p>}
      </form>
    </div>
  );
};

export default LoginForm;
