import React from 'react'
import { Link } from "react-router-dom";


export default function NavBar() {
  return (
    <div>
        <Link to ="/dashboard/account">Account</Link>
        <Link to ="/dashboard/profile">Profile</Link>
        </div>
  )
}
