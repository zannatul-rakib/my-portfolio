

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Skills from './components/Skills/Skills';


function App() {


  return (
    <>
      <Navbar />
      <main className="main">
        <Home />
        <About/>
        <Skills/>
      </main>
      <Footer />
    </>
  )
}

export default App
