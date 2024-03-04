import { useState } from 'react'
import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom'
import { Resume, Portfolio, AboutMe, Contact } from './pages'
import './App.css'
import GitHubIcon from './assets/images/GitHub_Logo_White.png'
import LinkedInIcon from './assets/images/LinkedIn.png'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <header className='row'>
          <div className='col-6'>
            <h1>
              Andrew Helmin
            </h1>
          </div>
          <div className='col-6'>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <a class="nav-link" href="/">About Me</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/portfolio">Portfolio</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/contact">Contact</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/resume">Resume</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
      </div>
      <div className='background'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<AboutMe />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='*' element={<AboutMe />} />
          </Routes>
        </BrowserRouter>
      </div>

      <div className='text-center'>
        <footer>
          <a href="https://www.github.com/AHelmin"><img src={GitHubIcon} id='git-icon' alt='github icon' /></a>
          <a href='https://www.linkedin.com/in/andrew-helmin-984074137'><img src={LinkedInIcon} className="ms-3" id='linked-icon' alt='linkedin icon' /></a>
        </footer>
      </div>

    </>
  )
}

export default App
