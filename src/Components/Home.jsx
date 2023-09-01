import React, { useState } from 'react';
import Login from './Login';
import About from './About';
import Logout from './Logout';


export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('isLoggedIn') === 'true'
  );

  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // alert("logout")
    console.log("Logout")
  }
//     localStorage.removeItem('isLoggedIn');
//     setIsLoggedIn(false);
//   };

  const handleRegister = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
    <div>
      {isLoggedIn ? (
        
        <Logout onLogout={handleLogout} />
      ) : (
        <div>
          <Login onLogin={handleLogin} onRegister={handleRegister} />
          {/* <Register onRegister={handleRegister} /> */}
        </div>
      )}

     
      
    </div>
    </>
  );
}
