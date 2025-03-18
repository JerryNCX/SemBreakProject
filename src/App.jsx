import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './MainPage/Header'
import LandingPage from './MainPage/LandingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header />} />
    </Routes>
    </BrowserRouter> */}
    <LandingPage />
    </>
  )
}

export default App
