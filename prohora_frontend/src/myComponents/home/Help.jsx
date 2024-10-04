import React from 'react'
import { HashRouter as Router, Routes, Route, Outlet,Link } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

export default function Help() {
  return (
    <div>
       
      <div style={{backgroundColor:'#FEEDD9', height:'580px', width:'100%',display:'flex', flexDirection:'column', gap:'12vmin', justifyContent:'center',justifyItems:'center', alignItems:'center', alignContent:'center'}}>
        <h2>Saving lives with space technology in flood-prone region</h2>
        <div style={{backgroundColor:'#FEEDD9', height:'270px', width:'100%',display:'flex', flexDirection:'row', gap:'12vmin', justifyContent:'center',justifyItems:'center', alignItems:'center', alignContent:'center'}}>
        <div tyle={{backgroundColor:'#001F3F', height:'150vmin', width:'200vmin',display:'flex',justifyContent:'center',justifyItems:'center', alignItems:'center', alignContent:'center'}}>
          <div>
        <button type="submit" style={{backgroundColor:'#001F3F', height:'9vmin',width:'30vmin', fontSize:'30px',color:'#FEEDD9', borderRadius:'20px 20px 20px 20px'}}>Contact Us</button>
        </div>
        </div>
        <div tyle={{backgroundColor:'#001F3F', height:'150vmin', width:'200vmin',display:'flex',justifyContent:'center',justifyItems:'center', alignItems:'center', alignContent:'center'}}>
        <div>
        <button type="submit" style={{backgroundColor:'#001F3F', height:'9vmin',width:'30vmin', fontSize:'30px',color:'#FEEDD9', borderRadius:'20px 20px 20px 20px'}}>Message Us</button>
        </div>
        </div>
        </div>
      </div>
      
    </div>
  )
}
