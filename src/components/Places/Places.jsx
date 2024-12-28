import React from 'react'
import Img1 from '../../assets/places/img-1.jpg'
import Img2 from '../../assets/places/img-2.jpg'
import Img3 from '../../assets/places/img-3.jpg'
import Img4 from '../../assets/places/img-4.jpg'
import Img5 from '../../assets/places/img-5.jpg'
import Img6 from '../../assets/places/img-6.jpg'
import PlaceCard from './PlacesCard'

const PlacesData = [
  {
    img: Img1,
    title: "Boat",
    location: "USA",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img2,
    title: "Boat",
    location: "USA",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img3,
    title: "Boat",
    location: "USA",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img4,
    title: "Boat",
    location: "USA",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img5,
    title: "Boat",
    location: "USA",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img6,
    title: "Boat",
    location: "USA",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 6700,
    type: "Cultural Relax",
  },
]


const Places = ({ handleOrderPopup }) => {
  return (
    <div className=" bg-gray-50 py-10">
        <div className="container">
            <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
                Best Places in the World
            </h1>
            
            <div  className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
              {PlacesData.map((item, index) => (
                <PlaceCard
                   handleOrderPopup={handleOrderPopup}
                  key={index}
                  {...item}
                />
              ))}
            </div>
        </div>
      
    </div>
  )
}

export default Places
