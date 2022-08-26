import React, {useEffect} from 'react'
import {logoutUser} from '../util/localStorage'
import {useNavigate} from 'react-router-dom'

export default function Logout(){

    const navigate = useNavigate()

   useEffect(() => {
       logoutUser()
       navigate('/', {replace: true})
   }, [])

   return <h1>Logging out...</h1>
}