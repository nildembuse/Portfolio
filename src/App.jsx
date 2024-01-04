import './App.css'
import  Navbar  from './component/Navbar'
import  Hero  from './component/Hero'
import About from './component/About'
import Projects from './component/Projects'
import Contact from './component/Contact'

function App() {
 
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />

    </div>
  )
}

export default App
