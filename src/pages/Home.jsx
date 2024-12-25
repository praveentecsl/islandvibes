import React from 'react'
import Mainvid from '../assets/video/Ho.mp4'
import Hero from '../components/Hero/Hero'
import Places from '../components/Places/Places'
import BannerImg from '../components/BannerImg/BannerImg'
import PictureBanner from '../assets/banner.jpg'


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
          <Hero/>
        </div>
        <Places/>
        <BannerImg img={PictureBanner}/>
      </div>
      
    </>
  )
}

export default Home
