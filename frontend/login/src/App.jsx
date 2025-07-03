import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Navbar from './components/Navbar'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Morph from './components/Morph'
import protect from './Middleware/Protect'

function App() {
  return (
  <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/SignUp' element={<SignUp/>}/>
      <Route path='/SignIn' element={<SignIn/>}/>
      <Route path='Morph' element={
        <protect>
        <Morph/> 
        <protect/> 
        } />
    </Routes>
  </Router>
  )
}

export default App
