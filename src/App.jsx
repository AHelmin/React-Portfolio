import { useState } from 'react'
import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom'
import {
  Resume,
  Portfolio,
  AboutMe,
  Contact,
  RestaurantManager,
  HolidayMarketingTool,
  SocialNetworkAPI,
  EmployeeTracker,
  LogoMaker
} from './pages'

import './App.css'
import GitHubIcon from './assets/images/GitHub_Logo_White.png'
import LinkedInIcon from './assets/images/LinkedIn.png'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"

function App() {

  return (
    <>
      <div className='container-fluid header'>
        <header className='row align-items-center justify-content-center header-row'>
          <div className='col-lg-6 d-flex justify-content-lg-center justify-content-center halfheader'>
            <h1>Andrew Helmin</h1>
          </div>
          <div className='col-lg-6 d-flex justify-content-lg-end justify-content-center halfheader'>
            <nav className="navbar navbar-expand-lg navbar-light bg-black w-100">
              <button className="navbar-toggler mx-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="/">About Me</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/portfolio">Portfolio</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/contact">Contact</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/resume">Resume</a>
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
            <Route path='/restaurant-manager' element={<RestaurantManager />} />
            <Route path='/holiday-marketing-tool' element={<HolidayMarketingTool />} />
            <Route path='/social-network-api' element={<SocialNetworkAPI />} />
            <Route path='/employee-tracker' element={<EmployeeTracker />} />
            <Route path='/svg-logo-maker' element={<LogoMaker />} />
            <Route path='*' element={<AboutMe />} />
          </Routes>
        </BrowserRouter>
      </div>

      <div className='text-center footer'>
        <footer>
          <a href="https://www.github.com/AHelmin"><img src={GitHubIcon} id='git-icon' alt='github icon' /></a>
          <a href='https://www.linkedin.com/in/andrew-helmin-984074137'><img src={LinkedInIcon} className="ms-3" id='linked-icon' alt='linkedin icon' /></a>
        </footer>
      </div>

    </>
  )
}

export default App
