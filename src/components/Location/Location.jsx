import React from 'react'

const Location = () => {
  return (
    <div>
      <span id="location"></span>
      <section data-aos="fade-up" className="">
        <div className="container my-4">
          <h1 className="inline-block border-l-8 border-primary/50 py-2 pl-2 mb-4 text-xl font-bold sm:text-3xl">
            Location to visit
          </h1>

          <div className="rounded-xl ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26942.337489984453!2d73.48615225064371!3d4.185774680427234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b3f7e5607d1f5e5%3A0x8ad8e99b5a051299!2zTWFsw6ksIE1hbGRpdmVz!5e1!3m2!1sen!2slk!4v1735223786893!5m2!1sen!2slk" 
              width="100%"
              height="360"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              style={{ borderRadius: "20px" }}
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Location
