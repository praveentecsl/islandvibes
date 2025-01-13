import React from 'react'
import BlogCard from './BlogCard'
import Img1 from '../../assets/places/ee.webp'
import Img2 from '../../assets/places/s6.png'
import Img3 from '../../assets/places/hh.jpg'

const BlogsData = [
    {
        id: 1,
        image: Img1,
        title: "Top islands to visit in Europe",
        description:
          "Sardinia, a 9,301-square-mile island situated in the Mediterranean Sea, just west of the Italian mainland, lures travelers with its unique blend of ancient culture and arresting coastal views. In his travel book Sea and Sardinia, D.H. Lawrence wrote that Sardinia is different. And it's true. Not only can you lounge on a white beach or wade out into clear, turquoise waters, but you can enjoy a leisurely pranzo (lunch) complete with Sardinia's own take on pasta and wine. Yes, you can snorkel among colorful fish in nearby coves, but you can also explore inland Sardinia's traditional villages and see shepherds tending to their flocks. The drive along the island's northern Emerald Coast would convince you that Sardinia is characterized solely by glamorous hotels and ristorantes, and utterly perfect beaches, but you'd be wrong. It's also home to humble farms, forested mountains, and friendly but reserved locals… it's as Lawrence penned, different. ",
        author: "Praveen",
        date: "April 22, 2022",
      },
      {
        id: 1,
        image: Img2,
        title: "Top islands to visit in USA",
        description:
          "one of the largest volcanic eruptions in human history forced the center of what was then a single island to implode and succumb to the sea. Some say that this was the original home of the lost city of Atlantis, which long ago disappeared into the ocean's depths. Whatever remains of this mythological metropolis is now guarded by beautiful beaches and stately whitewashed homes. Today, Santorini consists of two inhabited islands and several islets. Most visitors spend their time on Thira (the archipelago's largest island), which is home to Santorini's major towns, including Fira and Oia. Sleepy Thirassia makes for a relaxing day trip too. And don't count out the quieter islands: Nea Kameni and Palea Kameni are also worth exploring.",
        author: "Chandeepa",
        date: "September 15, 2023",
      },
      {
        id: 1,
        image: Img3,
        title: "Top islands to visit in Africa",
        description:
          "Dreaming of a tropical getaway spent lounging on idyllic islands, trekking through verdant rainforests, hiking around jaw-dropping rock formations and spotting unique wildlife? Then set your sights on Madagascar. Located in the Indian Ocean, about 743 miles east of Mozambique, this African paradise is the fourth largest island in the world. Approximately 19,000 types of plants can be found in the country's 47 national parks and reserves, but its one-of-a-kind animals are the main draw for nature lovers. All of the world's 100-plus lemur species call this island nation home, as do more than 340 kinds of chameleons and a variety of birds.Though you'll likely spend some time in populous areas like Antananarivo (the country's capital) and Nosy Be (a small island off the mainland's northwest coast), Madagascar is filled with regions ripe for exploration. ",
        author: "Weerasinghe",
        date: "May 14, 2024",
      },
]

const BlogsComp = () => {
  return (
    <div>
      <div  data-aos='fade-up' className='container '>
        <h1 className=' my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold'>
            Our Latest Blogs
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default BlogsComp
