

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Footer from './components/Footer/Footer';


function App() {


  return (
    <>
      <Navbar />
      <main className="main">
        <Home />
      </main>
      <Footer />
    </>
  )
}

export default App
