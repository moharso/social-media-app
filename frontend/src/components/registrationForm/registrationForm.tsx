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
    <div className="registration-form">
      <div className="overlay" onClick={onClose}></div>
      <div className="form-container">
      <h2>{formMode === FormMode.Registration ? 'Register' : 'Login'}</h2>
        {formMode === FormMode.Registration ? (
        <form onSubmit={handleSubmit}>
          <h2>Registration Form</h2>
          <div>
            <label>Name:</label>
            <input type="text" value={name} onChange={handleNameChange} />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={handleEmailChange} />
          </div>
          <div>
            <label>Password:</label>
            <input type="text" value={password} onChange={handlePasswordChange} />
          </div>
          <div>
            <label>Password Confirm:</label>
            <input type="text" value={passwordConfirm} onChange={handlePasswordConfirmChange} />
          </div>
          <button type="submit">Register</button>
        </form>
        ) : (
          <LoginForm onLogin={handleLogin}/>
        )}
        <button className="switch-button" onClick={toggleFormType}>
          Switch to {formMode === FormMode.Registration ? 'Login' : 'Register'}
        </button>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default RegistrationForm;
