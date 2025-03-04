import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './MainPage/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header />} />
    </Routes>
    </BrowserRouter> */}
    <Header />
    </>
  )
}

export default App
