import React, { useState } from 'react';
import "./registrationForm.css"
import axios from "axios"
import LoginForm from '../loginForm/loginForm';

interface RegistrationFormProps {
  onClose: () => void;
}

enum FormMode {
  Registration,
  Login,
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [formMode, setFormMode] = useState(FormMode.Registration);

  const handleLogin = (email: string, password: string) => {
    onClose();
    window.location.href = "/app"
  };

  const toggleFormType = () => {
    setFormMode(formMode === FormMode.Registration ? FormMode.Login : FormMode.Registration);
  };


  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handlePasswordConfirmChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordConfirm(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (password !== passwordConfirm) {
      console.error('Password and password confirmation do not match');
      return;
    }

    try {
      await axios.post('http://localhost:4001/api/signup', { name, email, password, passwordConfirm });
      console.log('Registration successful');
      onClose();
    } catch (error) {
      console.error('Error registering:', error);
    }

    onClose();
  };

  return (
    <div className="registration-form fixed flex items-center justify-center min-h-screen w-full">
      <div className="overlay fixed flex justify-center inset-0 bg-black opacity-30" onClick={onClose}></div>
      <div className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-2 flex justify-center p-1">{formMode === FormMode.Registration ? 'Sign up' : 'Sign in'}</h2>
        {formMode === FormMode.Registration ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label>Name:</label>
            <input type="text" value={name} onChange={handleNameChange} className="mt-1 p-2 border rounded w-full"/>
          </div>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={handleEmailChange} className="mt-1 p-2 border rounded w-full" />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={handlePasswordChange} className="mt-1 p-2 border rounded w-full" />
          </div>
          <div>
            <label>Password confirmation:</label>
            <input type="password" value={passwordConfirm} onChange={handlePasswordConfirmChange} className="mt-1 p-2 border rounded w-full"/>
            {password !== passwordConfirm && (
    <p className="text-red-500">Passwords do not match</p>
  )}
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Register</button>
        </form>
        ) : (
          <LoginForm onLogin={handleLogin}/>
        )}
        <div className="flex justify-between">
        <button className="switch-button mt-4 text-sm text-blue-500 hover:underline p-2" onClick={toggleFormType}>
          Switch to {formMode === FormMode.Registration ? 'Login' : 'Register'}
        </button>
        <button className="close-button mt-4 text-sm text-gray-500 hover:underline p-2" onClick={onClose}>
          Close
        </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
