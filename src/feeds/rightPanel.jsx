import President from '../assets/president.png'
import Codedamn from '../assets/codedamn.jpg'
import JackD from '../assets/jack_dorsey.jpg'
import Nextjs from '../assets/nextjs.png'

export default function RightPanel() {


    return (
        <div className='w-3/12 h-full bg-black overflow-y-scroll flex flex-col gap-y-4 p-4 px-4 flex-none'>
        
        <div className='h-[8vh] w-full bg-[#202327] rounded-full flex  gap-6 justify-start content-center p-4 focus:bg-black focus:border-blue-500 focus:border-[2px]'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-gray-500 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg>
        <input
        placeholder='Search Twitter'
        className='bg-transparent text-white w-[80%] border-0 border-transparent focus:border-transparent '
         />
        </div>
        <div className='h-max  w-full bg-[#16181C] rounded-2xl p-4  flex flex-col gap-y-6'>
        <h3 className='text-gray-200 text-xl font-bold tracking-wide'>What's happening</h3>
        <div className='flex  w-full justify-between text-white px-2'>
        <div className='w-4/5 flex flex-col gap-y-1'>
        <p className='text-xs text-gray-500'>India national news ·LIVE</p>
        <h6 className='font-bold'>Presidential Election 2022: Droupadi Murmu declared president</h6>
        <p className='text-xs text-gray-500'>Trending with <span className='text-blue-500'>#indianPresident #भारतीय राष्ट्रपति</span> </p>
        </div>
        <div className='w-1/4 rounded-xl pt-6'>
        <img
        src={President}
        className='rounded-2xl h-20 w-22'
        
         />
        </div>
        </div>
        <h3 className='text-blue-500'>Show more</h3>
        </div>
        <div className='h-max  w-full bg-[#16181C] rounded-2xl flex flex-col gap-6 justify-start content-center p-4'>
        <h3 className='text-gray-200 text-xl font-bold tracking-wide'>Who to follow</h3>
        <div className='flex justify-between'>
        <div className='flex gap-2'>
        <img
        src={JackD}
        alt='nextjs'
        className='rounded-full h-10 w-10'
         />
        <div className='flex flex-col text-white'>
        <h6 className='font-bold'>Jack Dorsey</h6>
        <p className='text-xs text-gray-500'>@jack01</p>
        </div>
        </div>
        <button className='py-2 px-4 text-sm bg-white rounded-full font-bold'>Follow</button>
        </div>
        <div className='flex justify-between'>
        <div className='flex gap-2'>
        <img
        src={Nextjs}
        alt='nextjs'
        className='rounded-full h-10 w-10'
         />
        <div className='flex flex-col text-white'>
        <h6 className='font-bold'>NextJs</h6>
        <p className='text-xs text-gray-500'>@next_js</p>
        </div>
        </div>
        <button className='py-2 px-4 text-sm bg-white rounded-full font-bold'>Follow</button>
        </div>
        <div className='flex justify-between'>
        <div className='flex gap-2'>
        <img
        src={Codedamn}
        alt='codedamn'
        className='rounded-full h-10 w-10'
         />
        <div className='flex flex-col text-white'>
        <h6 className='font-bold'>Codedamn</h6>
        <p className='text-xs text-gray-500'>@codedamn</p>
        </div>
        </div>
        <button className='py-2 px-4 text-sm bg-white rounded-full font-bold'>Follow</button>
        </div>
        <h3 className='text-blue-500'>Show more</h3>
        </div>
        </div>
        
    )
}