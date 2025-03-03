import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainPage from './MainPage/MainPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
    </BrowserRouter> */}
    <MainPage />
    </>
  )
}

export default App
