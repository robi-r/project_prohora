import React from 'react'
import { HashRouter as Router, Routes, Route, Outlet,Link } from 'react-router-dom';
import './ClimateCss.css'
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

export default function Climate() {
  return (
    <div>
        
      <div className='climateBody'>
        <div className='thenews'>
        <iframe width="100%" height="100%" src="https://science.nasa.gov/climate-change/" title="ClimateChange" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
      
    </div>
  )
}
