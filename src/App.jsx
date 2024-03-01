import { useState } from 'react'
import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom'
import { Resume, Portfolio, AboutMe, Contact } from './pages'
// import './App.css'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1 className='text-center'>
          &#128540;&#128540;&#128540;&#128540;&#128540;&#128540; This is the Header! 	&#128540;&#128540;&#128540;&#128540;&#128540;&#128540;&#128540;&#128540;&#128540;&#128540;&#128540;&#128540;&#128540;&#128540;&#128540;
        </h1>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AboutMe />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='*' element={<AboutMe />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
