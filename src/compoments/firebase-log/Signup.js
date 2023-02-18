import React, { useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
// import { createUserWithEmailAndPassword } from 'firebase/auth'
import Logo from '../../assets/logo.svg'



const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")


    const {createUser} = UserAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        try{
            await createUser(email, password)
            navigate('/homepage')
        }catch (e) {
            setError(e.message)
            console.log(e.message)
        }
    };

  return (
    <div className='max-w-[700px] mx-auto my-16 p-4'>
        <div>      
         <h1 className='text-2xl font-bold py-2'>Sign up to your account</h1>
         <p className='py-2'>Dont,t have an account yet? <Link to='/' className='underline'>Sign in</Link></p>
        </div>

        <form onSubmit={handleSubmit}>
            <div className='flex flex-col py-2'>
                <label >Emaill Address</label>
                <input onChange={(e) => setEmail(e.target.value)} className="border p-3" type='email'/>
            </div>
       
            <div className='flex flex-col py-2'>
                <label className='py-2 font-medium'>Password</label>
                <input onChange={(e) => setPassword(e.target.value)} className='border p-3' type='password'/>
            </div>
            <button className='border border-indigo-600 bg-indigo-500   w-full p-4 my-2 text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-600  duration-300 ...'>Sign Up</button>
        </form>
    
        <div className='center_welcome'>
            <p className='welcome_text'>Set Up Account On <img src={Logo} alt=""/> </p>
        </div>
    </div>
  )
}

export default Signup