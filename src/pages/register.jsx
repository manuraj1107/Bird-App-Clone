import React, {useState} from 'react'
import { createUser } from '../util/localStorage'
import { useNavigate, Link } from 'react-router-dom'
import LoginImg from '../assets/twitter_bg.png'


export default function Register(){
   
   const navigate = useNavigate()
   const [username, setUsername] = useState('')
   const [password, setPassword] = useState('')
   const [usernameFormat, setUsernameFormat] = useState(false);
   const [passwordFormat, setPasswordFormat] = useState(false);


   function registerUser(e){
     e.preventDefault()
     const response = createUser({username, password})

     if(response.status === 'ok'){
         console.log('You are registered, You can login')
         navigate('/login', {replace: true})
     }
     else{
         console.log(response.error)
     }

    
   }

   function userNameCheck(e) {
        let alphaName = new RegExp("^[a-zA-Z0-9_]*$");
        alphaName.test(e.target.value) ? setUsernameFormat(true) : setUsernameFormat(false);
        setUsername(e.target.value);
    }

        function passwordCheck(e) {
        let passReg = new RegExp('^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[!@#$%^&*])(?=.*?[0-9]).{8,}$');
        setPasswordFormat(passReg.test(e.target.value))
        setPassword(e.target.value);
    }
   
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
        <img className='w-full h-full object-cover' src={LoginImg} alt='' />
        
        </div>
        <div className='bg-black flex flex-col justify-center'>
        <form className='max-w-[400px]  lg:min-w-[500px] sm:max-w-[400px] w-full mx-auto bg-black py-12 px-12 rounded-lg sm:min-h-[75vh] border-[2px] border-gray-300' onSubmit={registerUser}>
        <h1 className='text-white text-4xl mb-4 lg:mb-20 font-bold'>Create your account</h1>
        <input
        className='text-gray-400 bg-black w-full rounded-sm lg:py-4 py-2 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none border-[1px] border-gray-600 lg:mb-2'
        value={username}
        onChange={e => userNameCheck(e)}
         type='text' 
         placeholder='username' />
         
         {usernameFormat ? "" : <p className="text-gray-600 font-normal text-sm sm:p-0 mb-2 pt-[1px]">Name should be alphanumeric, a-z, A-Z, 0-9...</p>}
        <input 
        className='text-gray-400 bg-black w-full rounded-sm lg:py-4 py-2 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none border-[1px] border-gray-600 lg:mb-2'
        value={password}
        onChange={e => passwordCheck(e)}
        type='password' 
        placeholder='password' />
        {passwordFormat ? "" : <p className="text-gray-600 font-normal text-sm sm:pt-0 pt-[1px]">Password should be minimum 8 characters, one capital, and one special character</p>
                        }
       
        <button className='w-full my-5 py-2 bg-blue-500 shadow-lg shadow-blue-600/10 hover:shadow-blue-800/30 font-semibold text-white rounded-lg lg:py-4 lg:text-lg' type='submit'>Create account</button>
        <p className='text-blue-500'>Already have an account? <span className='text-white'><Link to='/login'>Login</Link></span></p>
        </form>
        </div>
        </div>
    )
}

