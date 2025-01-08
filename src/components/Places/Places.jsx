import React from 'react'
import Img1 from '../../assets/places/img-1.jpg'
import Img2 from '../../assets/places/img-7.jpg'
import Img3 from '../../assets/places/img-3.jpg'
import Img4 from '../../assets/places/img-4.jpg'
import Img5 from '../../assets/places/img-5.jpg'
import Img6 from '../../assets/places/img-6.jpg'
import PlaceCard from './PlacesCard'

const PlacesData = [
  {
    img: Img1,
    title: "Maldives",
    location: "Maldives",
    description: "Maldives is one of the most Instagrammable places on earth.",
    price: 6700,
    type: "Relaxation and Tranquility",
  },
  {
    img: Img2,
    title: "Koh Samui ",
    location: "Thailand",
    description: "Thailand’s second-largest island, known for palm-lined beaches and lush jungles. ",
    price: 9500,
    type: "Cultural Relax",
  },
  {
    img: Img3,
    title: "Bali",
    location: "Indonesia",
    description: "This Indonesian island also has delicious food and some of the friendliest locals.",
    price: 5000,
    type: "Sandy Beaches",
  },
  {
    img: Img4,
    title: "Galapagos Islands",
    location: "South America",
    description: "The islands also feature exciting hikes up rocky cliffs and the second-largest crater on earth. ",
    price: 8500,
    type: "adventurers and wildlife",
  },
  {
    img: Img5,
    title: "Hawaii",
    location: "USA",
    description: "Lanai is the most remote of the islands, and the unspoiled scenery will make you feel totally at peace.",
    price: 4500,
    type: "untouched by civilization",
  },
  {
    img: Img6,
    title: "Santorini",
    location: "Greek ",
    description: "A Greek island surrounded by the stunning aquamarine waters of the Aegean Sea.",
    price: 7000,
    type: "Beautiful Scenery",
  },
]


const Places = ({ handleOrderPopup }) => {
  return (
    <div className=" bg-gray-50 py-10">
        <div className="container">
            <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
                Best Islands in the World
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
