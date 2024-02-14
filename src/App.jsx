import React from "react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import HomePage from "./components/HomePage"


function App() {
  return (
    <>
    <Navbar/>
    <HomePage/>
    <Footer/>
    <SpeedInsights/>
    </>
  )
}

export default App
