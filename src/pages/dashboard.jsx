import React, {useState ,useEffect} from 'react'
import {useLoggedInUser} from '../util/localStorage'
import {useNavigate, Link} from 'react-router-dom'
import Feed from '../feeds/feed'
import LeftPanel from '../feeds/leftPanel'
import RightPanel from '../feeds/rightPanel'


export default function Dashboard(){
    const [isLoggedIn, username] = useLoggedInUser()
    const navigate = useNavigate()

   

   useEffect(() => {
       if(isLoggedIn === 'no'){
         navigate('/home')
       }
   }, [isLoggedIn])

   if(isLoggedIn === 'unknown'){
       return <h2>Loading...</h2>
   }

    return (
        <div className='bg-black container flex justify-center h-screen '>
    <div className='flex flex-col justify-between w-3/12 bg-black'>
    <LeftPanel />
    
    <div className='flex flex-col gap-y-3 mb-4 p-2 mr-2'>
    <div className='text-white border-gray-500 border-[1px] text-center w-[50%] mx-auto p-2 rounded-full hover:bg-zinc-700'>Hello {username} </div>
    <button className='text-white bg-black mx-auto w-[50%] font-bold p-2 rounded-full border-blue-500 border-[2px]'><Link to='/logout'>Logout</Link></button>
    </div>
    </div>
    <Feed />
    <RightPanel />
    
    </div>)
}