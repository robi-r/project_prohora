import React from 'react'
import { HashRouter as Router, Routes, Route, Outlet,Link } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

export default function JoinUs() {
  return (
    <div>
        
      <div style={{backgroundColor:'#FEEDD9', height:'580px', width:'100%',display:'flex', flexDirection:'column', gap:'8vmin', justifyContent:'center',justifyItems:'center', alignItems:'center', alignContent:'center'}}>
        <button type="submit" style={{backgroundColor:'#001F3F', height:'9vmin',width:'auto', fontSize:'7vmin',color:'#FEEDD9', borderRadius:'20px 20px 20px 20px'}}>Donate</button>
        <button type="submit" style={{backgroundColor:'#001F3F', height:'9vmin',width:'auto', fontSize:'7vmin',color:'#FEEDD9', borderRadius:'20px 20px 20px 20px'}}>Volenteer</button>
      </div>
      
    </div>
  )
}
