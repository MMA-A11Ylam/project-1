import About from "./components/About"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import TechBanner from "./components/TechBanner"
import Work from "./components/Work"

const App = () => {
  return (
    <main className="font-light antialiased selection:bg-lime-300 selection:text-white">
      <Navbar/>
      <Hero/>
      <TechBanner/>
      <Projects/>
      <About/>
      <Work/>
      <Contact/>
    </main>
  )
}

export default App
