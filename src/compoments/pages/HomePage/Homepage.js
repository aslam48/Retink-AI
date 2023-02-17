import React from 'react'
import { UserAuth } from '../../context/AuthContext'

const Homepage = () => {
    const {user, logout} = UserAuth()
  return (
    <div>
      <p>User Email:{user && user.email}</p> 
        <button>Logout</button>
        <p>aslam</p>
        <p>aslam</p>
        <p>aslam</p>
        <p>aslam</p>
        <p>aslam</p>
    </div>
  
  )
}

export default Homepage