import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Register from './Register';

export default function Login() {
  const [showRegister, setShowRegister] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loggedIn] = useState(false);
  const navigate = useNavigate()
  const handleLogin = () => {
    const userData = JSON.parse(localStorage.getItem('user'));
    const user = userData.find(p => p.email==email) 
    if (!user) {
      return alert("user is not registered")
    }

    if (user && user.email === email && user.password === password) {
  
      navigate('/dashboard/profile')
    } else {
      alert('Invalid username or password. Please register first.');
    }
  };

  const handleRegister = () => {
    setShowRegister(true);
  };

  return (
    <div>
      {!loggedIn ? (
        <div>
          {/* <input
            type='text'
            value={username}
            placeholder='USERNAME'
            onChange={(e) => setUsername(e.target.value)}
          /> */}

          <input
            type='password'
            value={password}
            placeholder='PASSWORD'
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type='email'
            value={email}
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
          />

          <button onClick={handleLogin}>Login</button>
          <p>
            Don't have an account?{' '}
            <span onClick={handleRegister}>Register</span>
          </p>
        </div>
      ) : null}

      {showRegister && !loggedIn && (
        <Register onRegister={() => setShowRegister(false)} />
      )}
    </div>
  );
}
