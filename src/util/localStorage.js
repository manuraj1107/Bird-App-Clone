import React, {useState, useEffect} from 'react'
// localstorage.js will keep a few utilities of local storage which will help us to interact with it


// this will accept username and password

/**
 * this function
 * return {status: true} if user is created
 * return {status: false, error: "message"} if there is an error
 */

const USER_DB_KEY = 'codedamn-users'
const AUTH_USER_KEY = 'codedamn-authenticated-user'

export function logoutUser() {
    localStorage.removeItem(AUTH_USER_KEY)
}


export function useLoggedInUser() {
    const [username, setUsername] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState('unknown')

    useEffect(() => {
        const username = localStorage.getItem(AUTH_USER_KEY)
        if(username) {
            setUsername(username)
           setIsLoggedIn('yes')
        }
        else {
            setIsLoggedIn('no')
        }
      
    }, [])

    return [
        isLoggedIn,
        username
    ]
}

export function loginUser({username , password}){
    let usersKey = localStorage.getItem(USER_DB_KEY);

    if(!usersKey){
        // probably this is the first time someone used it
        return {
            status: 'error',
            error: 'Invalid credentials'
        }
    }

    const usersArray = JSON.parse(usersKey)


    const user = usersArray.find(user => user.username === username && user.password === password)

    if(user){
        
        localStorage.setItem(AUTH_USER_KEY, username)

        return {
            status: 'ok'
        }
    }
    else{
        return {
            status: 'error',
            error: 'Invalid credentials'
        }
    }
}

export function createUser({username, password}){
    let usersKey = localStorage.getItem(USER_DB_KEY);

    if(!usersKey){
        // probably this is the first time someone used it
        usersKey = '[]'
    }

    const usersArray = JSON.parse(usersKey)

    // 1. Find if there is another user with similar username

    const duplicate = usersArray.find(user => user.username === username)

    if(duplicate){
        return {
            status: 'error',
            error: 'Username already exists'
        }
    }

    // 2.Password strength check

    if(password.length < 2){
        return {
            status: 'error',
            error: 'Password too weak'
        }
    }

    // 3. Create the account

    usersArray.push({
        username,
        password
        })

// cause it can only store stringified value
    localStorage.setItem(USER_DB_KEY, JSON.stringify(usersArray))   

    return {
        status: 'ok'
    } 

}