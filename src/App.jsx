import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import Dashboard from './pages/dashboard'
import Logout from './pages/logout'
import {useState, createContext} from "react";
import './App.css'


export const AppContext = createContext()
function App() {

    const [usernameContext, setUsernameContext] = useState('')
	return (
        <AppContext.Provider value={{usernameContext, setUsernameContext}}>
		<Routes>
         <Route path='/' element={<Home />} />
         <Route path='/login' element={<Login />} />
         <Route path='/register' element={<Register />} />
         <Route path='/dashboard' element={<Dashboard />} />
         <Route path='/logout' element={<Logout />} />
		</Routes>
        </AppContext.Provider>
	)
}

export default App
