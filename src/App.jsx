import React from "react"
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import HomePage from "./components/HomePage"


function App() {
  return (
    <>
    <Navbar/>
    <HomePage/>
    <Footer/>
    </>
  )
}

export default App
