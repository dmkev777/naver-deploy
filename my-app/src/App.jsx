import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import HomePage from './pages/Home'
import Report from './pages/Report'
function App() {
  return (
    <>
    <Header/>
    <Router>
      <Sidebar/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/report' element={<Report/>} />
      </Routes>
    </Router>
    

    </>
  )
}

export default App
