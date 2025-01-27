import Hero from "./Hero";
import About from "./About";
import Navbar from "./Navbar";
import Projects from "./Projects"
import Contact  from "./Contact";


function App(){
  return(
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App;