import React from 'react'
import Location from '../components/Location/Location'

const About = () => {
  return (
    <div>
      <div className="container pt-14">
        <div className="py-10">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            About us
          </h1>
          <p>
            Welcome to [ISLAND VIBES], your gateway to unforgettable travel experiences!
            At [ISLAND VIBES], we specialize in curating personalized and seamless travel solutions to help you explore the world with ease. Whether you're seeking an adventurous getaway, a serene escape, or a cultural deep dive, we’re here to make it happen.
            Our mission is to connect travelers with extraordinary destinations, creating memorable journeys that inspire and rejuvenate. With a dedicated team of travel experts, we provide top-notch services, from itinerary planning and local recommendations to hassle-free bookings and on-ground support.
            We believe that travel is not just about visiting new places—it’s about creating stories, building connections, and discovering the beauty of the world. Join us in turning your travel dreams into reality.
            Start your adventure with us today, and let’s make every moment count!
            Your next great experience begins here.

          </p>
          <br />
          <p>
            Discover the world with [ISLAND VIBES]. We specialize in personalized travel planning, ensuring every trip is smooth, memorable, and inspiring. Let’s make your travel dreams a reality!
          </p>
        </div>
      </div>
      <Location />
    </div>
  )
}

export default About
