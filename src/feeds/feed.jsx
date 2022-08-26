import React, {useState ,useEffect, useContext, useRef} from 'react'
import ProfilePic from '../assets/profilepic.jpg'
import {useLoggedInUser} from '../util/localStorage'



export default function Feed() {
const [isLoggedIn, username] = useLoggedInUser()
const inputTask = useRef(null);
const [tweet, setTweet] = useState([]);
const [newPost, setNewPost] = useState('');
const [toggleSubmit, setToggleSubmit] = useState(true);
const [isEditItem, setIsEditItem] = useState(null)
const [liked, setLiked] = useState(false);
const [color, setColor] = useState('none');

const feed = {
    
    postID: tweet.length === 0 ? 1: tweet[tweet.length - 1].postID + 1, // a unique post ID
    contents: newPost, 
    author: username,
    createdOn: Date(Date.now()).toString().substring(0,21), 
    updatedOn: Date.now(),

}


const handleChange = (event) => {
    setNewPost(event.target.value);
    
    
}

const addPost = () => {
    if(inputTask.current.value == ""){
        alert('please write something, this post is empty');
    }
    else if(inputTask && !toggleSubmit){
        setTweet(
            tweet.map((task) => {
                if(task.postID == isEditItem){
                    return { ...task, contents: newPost};
                    
                }
                return task;
            })

        )
                            
     setToggleSubmit(true);
     setNewPost('');
     setIsEditItem(null); 
    }
    else{
    setTweet([...tweet, feed]);}
    inputTask.current.value = ''
    setNewPost('');
    console.log(tweet);
    console.log(feed);

    
}

const deletePost = (postID) => {
    const newTweet = tweet.filter((post) => {
        return post.postID !== postID
    });
    setTweet(newTweet);
} 

const editItem = (id) =>{
    let newEditItem = tweet.find((elem) => {
       return elem.postID === id
    })
    console.log(newEditItem);
    setToggleSubmit(false);
    inputTask.current.value = newPost;
    setNewPost(newEditItem.contents)
    setIsEditItem(id);
}

const likedBtn = () => {
 if(!liked){
     setColor('red')
     setLiked(!liked)
 }
 else{
     setColor('none')
     setLiked(!liked)
 }
}
    return (
        /* Post*/
        <div className='border-x-[1px] border-x-gray-700 w-2/5 bg-black overflow-y-scroll'>
        <div className='flex h-[200px] bg-black border-y-[1px] border-y-gray-700 border-t-transparent'>
        <div className='flex-none p-2  '>
        <img
        src={ProfilePic}
        className='h-[40px] w-[40px] mt-2 ml-2 rounded-full'
        alt='profile_pic'
         />
        </div>
        <div className='flex-1 p-2 w-max  dark:text-white '>
        <textarea className='w-11/12 py-4 px-2 h-28 break-words overflow-none bg-black text-left dark:text-white'
        placeholder="What's happening..."
        type='text'
        value={newPost}
        ref={inputTask}
        maxLength='280'
        onChange ={handleChange}
        />
         <div className='w-full border-t-gray-600 border-[1px] border-transparent  flex justify-end p-4'>
         
         {
             toggleSubmit ? <button className='w-[80px] py-2 px-2 bg-blue-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 font-semibold text-white rounded-3xl' onClick={addPost} >Tweet</button> : <button className='w-[80px] py-2 px-2 bg-blue-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 font-semibold text-white rounded-3xl' onClick={addPost} >Edit</button>
         }
         </div>
        </div>
        </div>
     <div className='text-white w-full'>
     {tweet.reverse().map((task) => {
         return (<div className='flex  h-max w-full bg-black border-[1px] border-gray-600 border-t-transparent'>
             <div className='flex-none p-2  '>
        <img
        src={ProfilePic}
        className='h-[40px] w-[40px] mt-2 rounded-full'
        alt='profile_pic'
         />
        </div>
        <div className=' p-2 flex-1 w-[50%] dark:text-white flex flex-col'>
        <div className='flex gap-2 w-full  justify-between'>
        <h3 className='font-bold px-2 text-white w-[50%]'>@{task.author}</h3>
        <p className='text-gray-500'>{task.createdOn}</p>
        </div>
        <p className='w-11/12 py-4 px-2  break-words overflow-y-scroll bg-black text-left dark:text-white'>
        {task.contents}
        </p>
         
         <div className='w-[90%]   border-[1px] border-transparent  flex justify-between p-4 mx-auto'>
         <svg onClick={likedBtn} xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 rounded-full  hover:bg-zinc-800 p-[6px] hover:scale-110 duration-75" fill={color} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
</svg>
         
         <div>
         <svg onClick={() => deletePost(task.postID)} xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 rounded-full  hover:bg-zinc-800 p-[6px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
</svg></div>
<div>
<svg onClick={() => editItem(task.postID)} xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 rounded-full  hover:bg-zinc-800 p-[6px]" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
</svg>
</div>
         
        
         </div>
        </div>
        </div>
         )
     })}
     </div>
 

                       </div>
    )
}