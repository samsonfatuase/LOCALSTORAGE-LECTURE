import React, { useState } from 'react';

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const userData = []

  const handleRegister = () => {
    const userData = JSON.parse(localStorage.getItem('user')) || [];
    console.log(userData)
    const user = userData.find(p => p.email==email) 
      


    if (username && password && email) {
      if (!user) {
        const newUser = {
          username,
          password,
          email
        };
        userData.push(newUser)
        localStorage.setItem('user', JSON.stringify(userData));
        
      } else {
        alert('User already exists');
      }
    } else {
      alert('Please fill in both fields');
    }
  };

  return (
    <div>
      <input
        type='text'
        value={username}
        placeholder='USERNAME'
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type='email'
        value={email}
        placeholder='EMAIL'
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type='password'
        value={password}
        placeholder='PASSWORD'
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}
