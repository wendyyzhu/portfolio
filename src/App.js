import './App.css'
import Footer from './Footer'
import NavBar from './NavBar'
import Header from './Header/Header'
import About from './About'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'
import Contact from './Contact/Contact'

function App() {
  return (
    <div className="App">
      <div className='top-section'>
        <NavBar />
        <Header />
      </div>
      <About />
      <Projects />
      <Skills />
      <div className="bottom-section">
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App;
