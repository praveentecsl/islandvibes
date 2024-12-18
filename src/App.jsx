import React from 'react'
import { BrowserRouter,Route,routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Route path='/' element={<Layout />}>
          <Route index element = {<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/blogs' element={<Blogst />} />
          <Route path='/blogs/:id' element={<BlogsDetail />} />
          <Route path='/places' element={<PlacesRout />} />
          <Route path='*' element={<Nopage />} />


        </Route>
      
      
      
      
      </BrowserRouter>
      
    </>
  )
}

export default App

