import React, { useState } from 'react';
import axios from 'axios';

interface LoginFormProps {
    onLogin: (email: string, password: string) => void;
  }

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await axios.post('http://localhost:4001/api/login', { email, password });
      console.log('Login successful');
      onLogin(email, password);
      localStorage.setItem('email', email);
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Email or Password is wrong!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
    <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
    <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
    <button type="submit">Login</button>
    {errorMessage && <p>{errorMessage}</p>}
  </form>
  );
};

export default LoginForm;
