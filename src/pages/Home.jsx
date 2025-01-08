import React from 'react'
import Mainvid from '../assets/video/Ho.mp4'
import Hero from '../components/Hero/Hero'
import Places from '../components/Places/Places'
import BannerImg from '../components/BannerImg/BannerImg'
import PictureBanner from '../assets/HERO-SHOT.jpg'
import Blogs from './Blogs'
import Banner from '../components/Banner/Banner'
import Testimonial from '../components/Testimonial/Testimonial'
import Popup from '../components/Popup/Popup'


const Home = () => {

  const [orderPopup, setOrderPopup] = React.useState(false)

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  }

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
        <Places handleOrderPopup={handleOrderPopup} />
        <BannerImg img={PictureBanner}/>
        <Blogs />
        <Banner />
        <BannerImg img={PictureBanner} />
        <Testimonial />
        <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </div>
      
    </>
  )
}

export default Home
