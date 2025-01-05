import React from 'react'
import Banner from './HomeComponents/Banner'
import SkillsSection from './HomeComponents/SkillSection'
import ProjectsSection from './HomeComponents/ProjectsSection'
import ContactForm from './HomeComponents/ContactForm'
import AboutMe from './HomeComponents/AboutMe'

const Home = () => {
  return (
    <div>
        <Banner/>
        <SkillsSection/>
        <ProjectsSection/>
        <ContactForm/>
        <AboutMe/>
    </div>
  )
}

export default Home