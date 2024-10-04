import React from 'react'
import { HashRouter as Router, Routes, Route, Outlet,Link } from 'react-router-dom';
import './FooterCss.css';
import logoTHydro from '../images/logoTHydro.png';

export default function Footer() {
  return (
    <div>
      <div className='fullFooter'>
      <img className="Team-logo" src={logoTHydro} alt="logo" />
      </div>
    </div>
  )
}