

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Services from './components/Services/Services';
import Qualification from './components/Qualification/Qualification';
import Projects from './components/Projects/Projects';


function App() {


  return (
    <>
      <Navbar />
      <main className="main">
        <Home />
        <About/>
        <Skills/>
        <Services/>
        <Qualification/>
        <Projects/>
      </main>
      <Footer />
    </>
  )
}

export default App
