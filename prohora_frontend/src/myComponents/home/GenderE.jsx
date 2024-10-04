import React from 'react'
import { HashRouter as Router, Routes, Route, Outlet, Link } from 'react-router-dom';
import './GenderECss.css'
import GemainImage from '../images/gEImageM.png'
import Navbar from './Navbar'
import Footer from './Footer'

export default function GenderE() {
  return (
    <div>

      <div className='genderEBody'>
        <div className='gET'>
          <h1 style={{ fontSize: '50px' , margin:'0px 0px'}}>Gender equality</h1>
        </div>
        <div className='gEp1'>
          <div className='gEp2'>
            Socities that protect equal rights for girls and boys create benefits for everyone
          </div>
        </div>
        <div className='gENav'>
          <Link to="/" style={{ textDecoration: "none" }}><div className='gENItems' style={{ color: "#001F3F", fontSize: "3.5vmin", padding: "0%", margin: "0px 0px", border: "0%" }}>News</div></Link>
          <Link to="/" style={{ textDecoration: "none" }}><div className='gENItems' style={{ color: "#001F3F", fontSize: "3.5vmin", padding: "0%", margin: "0px 0px", border: "0%" }}>What we do</div></Link>
          <Link to="/" style={{ textDecoration: "none" }}><div className='gENItems' style={{ color: "#001F3F", fontSize: "3.5vmin", padding: "0%", margin: "0px 0px", border: "0%" }}>Reports</div></Link>
          <Link to="/" style={{ textDecoration: "none" }}><div className='gENItems' style={{ color: "#001F3F", fontSize: "3.5vmin", padding: "0%", margin: "0px 0px", border: "0%" }}>Data</div></Link>
          <Link to="/" style={{ textDecoration: "none" }}><div className='gENItems' style={{ color: "#001F3F", fontSize: "3.5vmin", padding: "0%", margin: "0px 0px", border: "0%" }}>Overview</div></Link>

        </div>
        <div className='gEImage1'>
        <img  src={GemainImage} alt='' style={{width:"30%", height:"100%"}} />
        </div>
      </div>

    </div>
  )
}
