import React from 'react'
import { HashRouter as Router, Routes, Route, Outlet, Link } from 'react-router-dom';
import './NavbarCss.css';
import logoProhora from '../images/logoProhora.png';
import SearchIcon from '../images/search_Icon.png';
import HomeM from './HomeM.jsx';
import Climate from './Climate.jsx';
import Alert from './Alert.jsx';
import GenderE from './GenderE.jsx';
import Help from './Help.jsx';
import JoinUs from './JoinUs.jsx';



export default function Navbar() {
  return (
    <div>
      <div>
        <div style={{
          backgroundColor: 'transparent',
          height: '12vmin',
          width: '100%',
          padding: "0%",
          margin: "0px 0px",
          border: "0%",
          display: "flex",
          justifyContent: 'space-between', // Added to push items to opposite ends
          alignItems: 'center' // Ensure vertical alignment
        }}>
          <div style={{ justifyItems: 'flex-start' }}>
            <img className="App-logo" src={logoProhora} alt="logo" style={{ height: '10vmin', pointerEvents: 'none' }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}> {/* Container for search input and button */}
            <input
              type="search"
              placeholder="SEARCH..."
              aria-label="Search"
              style={{
                fontSize: '20px',
                border: 'none',
                backgroundColor: 'transparent',
                outline: 'none',
                width: '140px',
                padding: '0px 0px',
                boxShadow: 'none' // Remove any box shadow if applied
              }}
            />
            <button type="submit" style={{ height: '7vmin', backgroundColor: 'transparent', outline: 'none', border: 'none', margin: "0px 0px", padding: '0' }}>
              <img className="Search-Icon" src={SearchIcon} alt="" style={{ height: '7vmin', outline: 'none', border: 'none', margin: "0px 0px", padding: '0' }} />
            </button>
          </div>
        </div>


        <div style={{ height: "8vmin", width: "100%", backgroundColor: "#001F3F", padding: "0%", margin: "0px 0px", border: "0%", display: "flex",flexWrap:'wrap', gap: "3px", alignItems: "center", justifyContent: "space-evenly" }}>

          <Link to="/" style={{textDecoration:"none"}}><div className='navNodes' style={{ color: "#FEEDD9", fontSize: "3.5vmin", padding: "0%", margin: "0px 0px", border: "0%" }}>Home</div></Link>
          <Link to="/Climate" style={{textDecoration:"none"}}><div className='navNodes' style={{ color: "#FEEDD9", fontSize: "3.5vmin", padding: "0%", margin: "0px 0px", border: "0%" }}>Climate</div></Link>
          <Link to="/FloodMap" style={{textDecoration:"none"}}><div className='navNodes' style={{ color: "#FEEDD9", fontSize: "3.5vmin", padding: "0%", margin: "0px 0px", border: "0%" }}>Maps</div></Link>
          <Link to="/FloodData" style={{textDecoration:"none"}}><div className='navNodes' style={{ color: "#FEEDD9", fontSize: "3.5vmin", padding: "0%", margin: "0px 0px", border: "0%" }}>Flood Data</div></Link>
          <Link to="/Alert" style={{textDecoration:"none"}}><div className='navNodes' style={{ color: "#FEEDD9", fontSize: "3.5vmin", padding: "0%", margin: "0px 0px", border: "0%" }}>Alert</div></Link>
          <Link to="/GenderE" style={{textDecoration:"none"}}><div className='navNodes' style={{ color: "#FEEDD9", fontSize: "3.5vmin", padding: "0%", margin: "0px 0px", border: "0%" }}>Gender Equality</div></Link>
          <Link to="/JoinUs" style={{textDecoration:"none"}}><div className='navNodes' style={{ color: "#FEEDD9", fontSize: "3.5vmin", padding: "0%", margin: "0px 0px", border: "0%" }}>Join Us</div></Link>
          <Link to="/Help" style={{textDecoration:"none"}}><div className='navNodes' style={{ color: "#FEEDD9", fontSize: "3.5vmin", padding: "0%", margin: "0px 0px", border: "0%" }}>Help</div></Link>
          

        </div>


        <div
  style={{
    height: "8vmin",
    width: "100%",
    backgroundColor: "#FEEDD9",
    padding: "0%",
    margin: "0px 0px",
    border: "0%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",  // Hide overflow for a smooth animation
    position: "relative"
  }}
>
  <div
    style={{
      display: "flex",  // Flexbox for aligning the two copies
      whiteSpace: "nowrap",  // Prevent text wrapping
      animation: "moveText 10s linear infinite"  // Animation for smooth continuous movement
    }}
  >
    <span
      style={{
        color: "#001F3F",
        fontSize: "3.5vmin",
        padding: "0%",
        margin: "0px 20px",
        border: "0%"
      }}
    >
      "Project Prohora" is under construction by "Team Hydro"...
    </span>
    <span
      style={{
        color: "#001F3F",
        fontSize: "3.5vmin",
        padding: "0%",
        margin: "0px 20px",
        border: "0%"
      }}
    >
      "Project Prohora" is under construction by "Team Hydro"...
    </span>
    <span
      style={{
        color: "#001F3F",
        fontSize: "3.5vmin",
        padding: "0%",
        margin: "0px 20px",
        border: "0%"
      }}
    >
      "Project Prohora" is under construction by "Team Hydro"...
    </span>
  </div>

  <style jsx>{`
    @keyframes moveText {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-100%);
      }
    }
  `}</style>
</div>

      </div>

    </div>
  )
}
