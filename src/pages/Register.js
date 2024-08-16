// Register.js
import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    profile: {
      firstName: '',
      lastName: '',
      bio: '',
      location: '',
      avatar: '',
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      profile: {
        ...prevState.profile,
        [name]: value
      }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users/register', formData);
      console.log(response.data);
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  const formStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '50px',
    border: '2px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '70vh',
    backgroundColor: '#ffffff'
  };

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.profile.firstName}
              onChange={handleProfileChange}
              required
            />
          </div>
          <div>
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.profile.lastName}
              onChange={handleProfileChange}
              required
            />
          </div>
          <div>
            <label>Bio:</label>
            <textarea
              name="bio"
              value={formData.profile.bio}
              onChange={handleProfileChange}
            />
          </div>
          <div>
            <label>Location:</label>
            <input
              type="text"
              name="location"
              value={formData.profile.location}
              onChange={handleProfileChange}
            />
          </div>
          <div>
            <label>Avatar URL:</label>
            <input
              type="text"
              name="avatar"
              value={formData.profile.avatar}
              onChange={handleProfileChange}
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
