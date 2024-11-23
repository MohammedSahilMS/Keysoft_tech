import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'
import Testimonials from './pages/Testimonials'
import ContactUs from './pages/ContactUs'
import Footer from './components/Footer'
import Loader from './components/Loader'

const App = () => {
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    setTimeout(() => setLoading(false),2000) 
  },[])

  if (loading) return <Loader/>

  
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/testimonials' element={<Testimonials/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App