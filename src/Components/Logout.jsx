import React from 'react'

export default function Logout({onLogout}) {
    // const handleLogout=()=>{
    //     localStorage.removeItem('isLoggedIn')
    //     onLogout();
    // }
  return (
    <div>
        <button onClick={onLogout}>logout</button>
    </div>
  )
}
