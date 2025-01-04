import React from 'react'
import Navbar from './HomeComponents/Navbar'
import Banner from './HomeComponents/Banner'
import SkillsSection from './HomeComponents/SkillSection'
import ProjectsSection from './HomeComponents/ProjectsSection'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <SkillsSection/>
        <ProjectsSection/>
    </div>
  )
}

export default Home