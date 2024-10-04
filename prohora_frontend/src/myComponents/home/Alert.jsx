import React from 'react'
import { HashRouter as Router, Routes, Route, Outlet,Link } from 'react-router-dom';
import  AlertingImg from './alertingImg.png'
import Map2 from '../images/map2.png'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

export default function Alert() {
  return (
    <div>
  
      <div style={{height:'1100px', width:'100%', display:'flex',  flexDirection:'row', gap:'7vmin', justifyContent:'center',justifyItems:'center', alignItems:'flex-start', alignContent:'flex-start'}}>
        <div style={{height:'600px',width:'40%', display:'flex',  flexDirection:'column', gap:'7vmin', justifyContent:'center',justifyItems:'center', alignItems:'center', alignContent:'center'}}>
          <img src={AlertingImg} alt='Alerts' style={{height:'400px',width:'100%'}}/>
          <h1>Space-driven Flood Alerts</h1>
        </div>
        <div style={{height:'1000px',width:'50%', display:'flex',  flexDirection:'column', justifyContent:'center',justifyItems:'center', alignItems:'center', alignContent:'center'}}>
        <h1 style={{backgroundColor:'#001F3F', color:'#FEEDD9', width:'100%', padding:'0%'}}>Select Country</h1>
        <img  src={Map2} alt='' style={{width:"100%", height:"90%"}} />
          
        </div>
      </div>
      
    </div>
  )
}
