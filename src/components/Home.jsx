import HeroSection from "./HeroSection"
import NavBar from "./NavBar"
import About from "./About"
import Skills from "./Skills"
import ProjectSection from"./ProjectSection"
import Contact from "./Contact"
import Footer from "./Footer"
import Services from "./Services"
import { useState } from "react"

const Home = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <>
      <div className="bg-white">
        <main>
          <HeroSection />
          <About />
          <Skills />
          <Services />
          <ProjectSection />
          <Contact />
        </main>
      </div>
    </>
  )
}

export default Home
