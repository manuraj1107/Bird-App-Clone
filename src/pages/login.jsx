import React, {useState} from 'react'
import { loginUser } from '../util/localStorage'
import {Link, useNavigate} from 'react-router-dom'
import LoginImg from '../assets/twitter_bg.png'


export default function Login(){
   const [username, setUsername] = useState('')
   const [password, setPassword] = useState('')
   const navigate = useNavigate()


   function attemptLoginUser(e){
     e.preventDefault()
     const response = loginUser({username, password})

     if(response.status === 'ok'){
         console.log('You are logged in')
         
         navigate('/dashboard', {replace: true})
     }
     else{
         console.log(response.error)
     }

    
   }
   
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
        <img className='w-full h-full object-cover' src={LoginImg} alt='' />
        
        </div>
        <div className='bg-black flex flex-col justify-center'>
        <form className='max-w-[400px]  lg:min-w-[500px] sm:max-w-[400px] w-full mx-auto bg-black py-12 px-12 rounded-lg sm:min-h-[75vh] border-[2px] border-gray-300' onSubmit={attemptLoginUser}>
        <h1 className='text-white text-4xl mb-4 lg:mb-20 font-bold'>Login to our app</h1>
        <input
className='text-gray-400 bg-black w-full rounded-sm lg:py-4 py-2 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none border-[1px] border-gray-600 lg:mb-4'
        value={username}
        onChange={e => setUsername(e.target.value)}
         type='text' 
         placeholder='username' />
        <input 
        className='text-gray-400 bg-black w-full rounded-sm lg:py-4 py-2 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none border-[1px] border-gray-600 lg:mb-4'
        value={password}
        onChange={e => setPassword(e.target.value)}
        type='password' 
        placeholder='password' />
        <button onClick={() => {
            setUsernameContext(username);
        }} className='w-full my-5 py-2 bg-blue-500 shadow-lg shadow-blue-600/10 hover:shadow-blue-800/30 font-semibold text-white rounded-lg lg:py-4 lg:text-lg' type='submit' value='Login'>Sign In</button>
        
        <p className='text-blue-500'>Don't have any account? <span className='text-white'><Link to='/register'>Register</Link></span></p>
        </form>
        </div>
        </div>
    )
}

