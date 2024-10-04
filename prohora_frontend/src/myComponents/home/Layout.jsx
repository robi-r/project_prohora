import React from 'react'
import { HashRouter as Router, Routes, Route, Outlet,Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <div>
        <Navbar/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}
