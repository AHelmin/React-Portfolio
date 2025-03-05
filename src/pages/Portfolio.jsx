//build the portfolio page

import { Link } from "react-router-dom"

import GitHubIcon from '../assets/images/github-mark.png'
import HerokuIcon from '../assets/images/heroku-logo-stroke-white.png'
// import AmplifyLogo from '../assets/images/amplify-logo.png'


export default function Portfolio() {

  return (
    <>

      <div className=" container-fluid flex-wrap-column flex-column mt-5 col-12 port-container">
        <h2 className="text-left mb-5">Portfolio</h2>
        <div className="d-flex  flex-wrap-column flex-md-row flex-column">
          <div className="row">
            <div className="col-12">
              <div className="row no-gutters justify-content-around mb-3">
                <div className="card col-6 mb-3 text-center" id='img5'>
                  <h4>Personal Portfolio</h4>
                  <Link className='link-link' to='/personal-portfolio'>
                    <div className="card-body d-flex" style={{ cursor: 'pointer' }}>
                    </div>
                  </Link>
                  <div className="d-flex link">
                    {/* <a href='https://main.d1d255cp7bj99s.amplifyapp.com/' target='_blank'><img src={AmplifyLogo} alt='Heroku icon, link to deployed application' /></a> */}
                    <a href='https://github.com/AHelmin/React-Portfolio' target='_blank'><img src={GitHubIcon} alt='Github icon, link to GitHub repo' /></a>
                  </div>
                </div>
                <div className="card col-6 mb-3 text-center" id='img4'>
                  <h4>To-Do App</h4>
                  <Link className='link-link' to='/to-do-app'>
                    <div className="card-body d-flex" style={{ cursor: 'pointer' }}>
                    </div>
                  </Link>
                  <div className="d-flex link">
                    <a href='https://github.com/AHelmin/todo-app' target='_blank'><img src={GitHubIcon} alt='Github icon, link to GitHub repo' /></a>
                  </div>
                </div>
              </div>
              <div className="container-fluid row no-gutters justify-content-around mb-3">
                <div className="card col-6 mb-3 text-center" id='img1'>
                  <h4>Restaurant Manager</h4>
                  <Link className='link-link' to='/restaurant-manager'>
                    <div className="card-body d-flex" style={{ cursor: 'pointer' }}>
                    </div>
                  </Link>
                  <div className="d-flex link">
                    <a href='https://group-1-restaurant-manager-dc017dce6dee.herokuapp.com/' target='_blank'><img src={HerokuIcon} alt='Heroku icon, link to deployed application' /></a>
                    <a href='https://github.com/Ms-Meredith-McD/Restaurant-Management' target='_blank'><img src={GitHubIcon} alt='Github icon, link to GitHub repo' /></a>
                  </div>
                </div>
                <div className="card col-6 text-center" id='img2'>
                  <h4>Holiday Marketing Tool</h4>
                  <Link className='link-link' to='/holiday-marketing-tool'>
                    <div className="card-body d-flex" style={{ cursor: 'pointer' }}>
                    </div>
                  </Link>
                  <div className="d-flex link">
                    <a href='https://www.github.com/thejackbitt/holiday-marketing-tool' target='_blank'><img src={GitHubIcon} alt='Github icon' /></a>
                  </div>
                </div>
              </div>
              <div className="container-fluid row no-gutters justify-content-around">
                <div className="card col-6 mb-3 text-center" id='img3'>
                  <h4>Social Network API</h4>
                  <Link className='link-link' to='/social-network-api'>
                    <div className="card-body d-flex align-items-center" style={{ cursor: 'pointer' }}>
                    </div>
                  </Link>
                  <a href='https://www.github.com/AHelmin/Social-Network-API' target='_blank'><img src={GitHubIcon} alt='Github icon' /></a>
                </div>
                <div className="card col-6 mb-3 text-center" id='img6'>
                  <h4>Weather Dashboard</h4>
                  <Link className='link-link' to='/weather-dashboard'>
                    <div className="card-body d-flex align-items-center" style={{ cursor: 'pointer' }}>
                    </div>
                  </Link>
                  <a href='https://www.github.com/AHelmin/Weather-Dashboard' target='_blank'><img src={GitHubIcon} alt='Github icon' /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}