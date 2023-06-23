import React from 'react'
import Header from "../../components/Header/Header"
import "../../style/components/About/About.css"
import TentangKami from '../../components/TentangKami/TentangKami'
import Footer from '../../components/Footer/Footer'
import Background from '../../components/Background/Background'
const About = () => {
  return (
    <div>
      <Header />
      <Background />
      <TentangKami />
      <Footer />
    </div>
  )
}

export default About