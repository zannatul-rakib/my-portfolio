

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Footer from './components/Footer/Footer';
import About from './components/About/About';


function App() {


  return (
    <>
      <Navbar />
      <main className="main">
        <Home />
        <About/>
      </main>
      <Footer />
    </>
  )
}

export default App
