import { useState } from 'react'
import Navbar from './Components/Navbar'
import { Routes,Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import ProjectPage from './Pages/ProjectPage'
import About from './Pages/About'
function App() {
  

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/project' element={<ProjectPage />} />
        <Route path='/about' element={<About />} />
      </Routes>
    
    </>
  )
}

export default App
