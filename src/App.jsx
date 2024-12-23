import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import PlacesRout from './pages/PlacesRout'
import About  from './pages/About'
import Blogs from './pages/Blogs'
import BlogsDetail from './pages/BlogsDetail'
import Nopage from './pages/Nopage'
import Home from './pages/Home'



const App = () => {
  return(
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/blogs/:id' element={<BlogsDetail />} />
            <Route path='/places' element={<PlacesRout />} />
            <Route path='*' element={<Nopage />} />
        
        
      
          </Route>
        </Routes>
      
      
      
      </BrowserRouter>
    
    
    
    
    </>





  ) 
  
    
      
      
      
      
      
    
  
}

export default App

