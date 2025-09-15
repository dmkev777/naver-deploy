import { use, useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import HomePage from './pages/Home'
import Settings from './pages/Settings'
function App() {
  const [theme, setTheme]=useState("theme-light");
  const [quote, setQuote]=useState("Discipline is the key");


  useEffect(()=> {
    const saved =localStorage.getItem("appConfig");
    if (saved) {
      const parsed = JSON.parse(saved);
      setTheme(parsed.theme || "theme-light");
    }
  }, [])
  useEffect(()=> {
    document.body.className=theme;
  }, [theme]);

  useEffect(()=> {
    const saved =localStorage.getItem("quoteConfig");
    if (saved) {
      const parsed = JSON.parse(saved);
      setQuote(parsed.quote || "Discipline is the key");
    }
  }, [])

  return (
    <>
    <Header quote={quote}/>
    <Router>
      <Sidebar/>
      <Routes>
        <Route path='/' element={<HomePage theme={theme}/>} />
        <Route path='/settings' element={<Settings theme={theme} setTheme={setTheme} setQuote={setQuote} quote={quote}/>} />
      </Routes>
    </Router>
    

    </>
  )
}

export default App
