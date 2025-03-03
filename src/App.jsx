//build the app page with persistant header and footer, with react router dom directing the page changes

import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import {
  Resume,
  Portfolio,
  AboutMe,
  Contact,
  RestaurantManager,
  HolidayMarketingTool,
  SocialNetworkAPI,
  PersonalPortfolio,
  WeatherDashboard,
  ToDoApp
} from './pages/index.js'

import './App.css'
import GitHubIcon from './assets/images/GitHub_Logo_White.png'
import LinkedInIcon from './assets/images/LinkedIn.png'
import FacebookIcon from './assets/images/Facebook_Logo_Primary.png'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

function App() {

  //state tuple and function to handle adding the 'active' class to the selected navbar item
  const [activeLink, setActiveLink] = useState(window.location.pathname)

  function handleClick(path) {
    setActiveLink(path)
  }

  return (
    <>
<BrowserRouter>
      <div className='container-fluid header'>
        
          <header className='row align-items-center justify-content-center header-row'>
            <div className='col-lg-6 d-flex justify-content-lg-center justify-content-center halfheader'>
              <h1>AJH Portfolio</h1>
            </div>
            <div className='col-lg-6 d-flex justify-content-lg-end justify-content-center halfheader'>
              <nav className="navbar navbar-expand-lg navbar-light bg-black w-100">
                <button className="navbar-toggler mx-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <Link to="/" className={`nav-link ${activeLink === '/' ? 'active' : ''}`}
                        onClick={() => setActiveLink('/')}>About Me</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/portfolio" onClick={() => handleClick('/portfolio')}
                        className={`nav-link ${activeLink === '/portfolio' ? 'active' : ''}`} >Portfolio</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/contact" onClick={() => handleClick('/contact')}
                        className={`nav-link ${activeLink === '/contact' ? 'active' : ''}`} >Contact</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/resume" onClick={() => handleClick('/resume')}
                        className={`nav-link ${activeLink === '/resume' ? 'active' : ''}`} >Resume</Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </header>
      </div>

      <div className='background'>

        <Routes>
          <Route path='/' element={<AboutMe />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/restaurant-manager' element={<RestaurantManager />} />
          <Route path='/holiday-marketing-tool' element={<HolidayMarketingTool />} />
          <Route path='/social-network-api' element={<SocialNetworkAPI />} />
          <Route path='/to-do-app' element={<ToDoApp />} />
          <Route path='/personal-portfolio' element={<PersonalPortfolio />} />
          <Route path='/weather-dashboard' element={<WeatherDashboard />} />
          <Route path='*' element={<AboutMe />} />
        </Routes>
      
    </div >

      <div className='text-center footer'>
        <footer>
          <a href="https://www.github.com/AHelmin"><img src={GitHubIcon} id='git-icon' alt='github icon' /></a>
          <a href='https://www.linkedin.com/in/andrew-helmin-984074137'><img src={LinkedInIcon} className="ms-3" id='linked-icon' alt='linkedin icon' /></a>
          <a href='https://www.facebook.com/andrew.helmin/'><img src={FacebookIcon} className="ms-3" id='linked-icon' alt='facebook icon' /></a>
        </footer>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
