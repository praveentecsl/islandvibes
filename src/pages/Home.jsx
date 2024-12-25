import React from 'react'
import Mainvid from '../assets/video/Ho.mp4'


const Home = () => {
  return (
    <>
      <div>
        <div className='relative h-[700px] '>
          <video 
            autoPlay
            loop
            muted
            className='absolute right-0 top-0 h-[700px] w-full object-cover z-[-1] '
          >
            <source src= {Mainvid} 
            type='video/mp4'/>
          </video>
        </div>
      </div>
      
    </>
  )
}

export default Home
