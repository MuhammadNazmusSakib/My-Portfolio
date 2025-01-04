import React from 'react'
import Navbar from './HomeComponents/Navbar'
import Banner from './HomeComponents/Banner'
import SkillsSection from './HomeComponents/SkillSection'
import ProjectsSection from './HomeComponents/ProjectsSection'
import ContactForm from './HomeComponents/ContactForm'
import AboutMe from './HomeComponents/AboutMe'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <SkillsSection/>
        <ProjectsSection/>
        <ContactForm/>
        <AboutMe/>
        <Footer/>
    </div>
  )
}

export default Home