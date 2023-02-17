import React from 'react'
import { UserAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Homepage = () => {
    const {user, logout} = UserAuth()

  const navigate = useNavigate()

    const handlelogout = async () => {
        try{
            await logout()
            navigate('/')
        }catch (e){         
            console.log(e.message)
        }
    }

  return (
    <div>
      <p>User Email:{user && user.email}</p> 
        <button onClick={handlelogout}>Logout</button>
        <p>aslam</p>
        <p>aslam</p>
        <p>aslam</p>
        <p>aslam</p>
        <p>aslam</p>
    </div>
  
  )
}

export default Homepage